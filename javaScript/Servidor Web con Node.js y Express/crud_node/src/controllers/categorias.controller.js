const fs = require('fs');
const path = require('path');

let categorias = [];

const index = (req, res) => { 
    try {
        const filePath = path.resolve(__dirname, '../../categorias.json');
        //Si el archivo NO existe → créalo con un array vacío
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify([]));
        } else {
            //Si existe, léelo
            const contenido =  fs.readFileSync(filePath, 'utf-8');
            //Si está vacío → inicialízalo
            if (contenido.trim() === '') {
                fs.writeFileSync(filePath, JSON.stringify([]));
            } else {
                categorias = JSON.parse(contenido);
            }
        }
    } catch (error) {
        categorias = [];
    }

    res.render("categorias/index", { categorias })
}

const show = (req, res) => {
    categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../categorias.json'), 'utf-8'));
    const { id } = req.params;

    const categoria =  categorias.find((categoria) => categoria.id == id);
    // console.log(categoria);

    if (!categoria) {
        return res.status(404).send("No existe la categoria");
    }

    // res.send('SHOW');
    res.render("categorias/show", {categoria});
}

const create = (req, res) => {
    res.render("categorias/create");
}

const store = (req, res) => {
    // const ultimaCategoria = categorias[categorias.length - 1];Otra forma
    let ultimaCategoria = undefined;
    let idNuevaCategoria = undefined;
    const { nombre } = req.body;
    categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../categorias.json'), 'utf-8'));
    if (categorias.length === 0) {
        idNuevaCategoria = 1;
    }else{
        ultimaCategoria = categorias.at(-1);
        idNuevaCategoria = ultimaCategoria.id + 1;
    }
 
    // const ultimaCategoria = categorias.at(-1);
    // const idNuevaCategoria = ultimaCategoria.id + 1;
    const categoria = {
        id: idNuevaCategoria,
        nombre
    }

    //Añadiendo un nuevo registro o categoria al array categorias
    categorias.push(categoria);

    fs.writeFileSync(path.resolve(__dirname, '../../categorias.json'), JSON.stringify(categorias));

    res.redirect("/categorias");
}

const edit = (req, res) => {
    categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../categorias.json'), 'utf-8'));
    const { id } = req.params;

    const categoria =  categorias.find((categoria) => categoria.id == id);

    if (!categoria) {
        return res.status(404).send("No existe la categoria");
    }

    res.render("categorias/edit", {categoria});// En el sugundo paramatro se manda un valor a dicah ruta, y dentro de dicha ruta se accede al valor habriendo los limitadores (<% %>) para agregar codigo js y asi solo colocar el nombre de la variable que desde quí se esta mandando para acceder a su valor.
}

const update = (req, res) => {
    categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../categorias.json'), 'utf-8'));
    const { id } = req.params;
    const { nombre } = req.body;
    const categoria =  categorias.find((categoria) => categoria.id == id);
    // console.log(categoria);

    if (!categoria) {
        return res.status(404).send("No existe la categoria");
    }

    categoria.nombre = nombre;
    fs.writeFileSync(path.resolve(__dirname, '../../categorias.json'), JSON.stringify(categorias));
    res.redirect("/categorias");
};

const destroy = (req, res) => {
    categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../categorias.json'), 'utf-8'));
    const { id } = req.params;
    //Se usa findIndex para traer el indice de un valor dentro de un array, en este caso traemos en indice del registro que tenga el id igual al que se le esta pasando
    const index =  categorias.findIndex((categoria) => categoria.id == id);

    if (index <= -1) {
        return res.status(404).send("No existe la categoria");
    }
    // splice se usa para borrar un registro dentro de un array, el primer parametro que recibe es el indice de donde comienza a borrar y el segundo es la cantidad de registros a borrar a partir del registro con el indice del primer parametro que le estamos pasando.
    categorias.splice(index, 1);
    fs.writeFileSync(path.resolve(__dirname, '../../categorias.json'), JSON.stringify(categorias));
    res.redirect('/categorias');
}

module.exports ={
    index,
    show,
    create, 
    store, 
    edit,
    update,
    destroy
};