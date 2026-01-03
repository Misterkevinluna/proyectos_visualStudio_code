const categorias = [
    { id: 1, nombre: "Categoria 1" },
    { id: 2, nombre: "Categoria 2" },
    { id: 3, nombre: "Categoria 3" },
];

const index = (req, res) => {
    res.render("categorias/index", {categorias});
}

const show = (req, res) => {
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
    const { nombre } = req.body;
    // const ultimaCategoria = categorias[categorias.length - 1];Otra forma
    const ultimaCategoria = categorias.at(-1);
    const idNuevaCategoria = ultimaCategoria.id + 1;
    const categoria = {
        id: idNuevaCategoria,
        nombre
    }

    //Añadiendo un nuevo registro o categoria al array categorias
    categorias.push(categoria);
    res.redirect("/categorias");
}

const edit = (req, res) => {
    const { id } = req.params;

    const categoria =  categorias.find((categoria) => categoria.id == id);

    if (!categoria) {
        return res.status(404).send("No existe la categoria");
    }

    res.render("categorias/edit", {categoria});// En el sugundo paramatro se manda un valor a dicah ruta, y dentro de dicha ruta se accede al valor habriendo los limitadores (<% %>) para agregar codigo js y asi solo colocar el nombre de la variable que desde quí se esta mandando para acceder a su valor.
}

const update = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    const categoria =  categorias.find((categoria) => categoria.id == id);
    // console.log(categoria);

    if (!categoria) {
        return res.status(404).send("No existe la categoria");
    }

    categoria.nombre = nombre;
    res.redirect("/categorias");
};

const destroy = (req, res) => {
    const { id } = req.params;
    //Se usa findIndex para traer el indice de un valor dentro de un array, en este caso traemos en indice del registro que tenga el id igual al que se le esta pasando
    const index =  categorias.findIndex((categoria) => categoria.id == id);

    if (index <= -1) {
        return res.status(404).send("No existe la categoria");
    }
    // splice se usa para borrar un registro dentro de un array, el primer parametro que recibe es el indice de donde comienza a borrar y el segundo es la cantidad de registros a borrar a partir del registro con el indice del primer parametro que le estamos pasando.
    categorias.splice(index, 1);
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