const modelCategories = require("../models/Category");

const index = (req, res) => { 
    modelCategories.findAll((error, categorias) => {
        if (error) {
            return res.status(500).send("Internal Server Error");
        }
        res.render("categorias/index", { categorias });
    });
}

const show = (req, res) => {
    const { id } = req.params;

    modelCategories.findById(id, (error, categoria) => {
        if (error) {
            return res.status(500).send("Internal Server Error");
        }
        if (!categoria) {
            return res.status(404).send("No existe la categoria");
        }
        res.render("categorias/show", {categoria});
    });
    
}

const create = (req, res) => {
    res.render("categorias/create");
}

const store = (req, res) => {
    const { name } = req.body;
    modelCategories.create(name, (error, id) =>{
        if (error) {
        //    return console.error(error); 
            return res.status(500).send("Internal Server Error");
        }
        console.log(id);
        res.redirect("/categorias");
    });
}

const edit = (req, res) => {
    const { id } = req.params;

    modelCategories.findById(id, (error, categoria) => {
        if (error) {
            return res.status(500).send("Internal Server Error");
        }
        if (!categoria) {
            return res.status(404).send("No existe la categoria");
        }
        res.render("categorias/edit", {categoria});// En el sugundo paramatro se manda un valor a dicah ruta, y dentro de dicha ruta se accede al valor habriendo los limitadores (<% %>) para agregar codigo js y asi solo colocar el nombre de la variable que desde quí se esta mandando para acceder a su valor.
    });
}

const update = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    modelCategories.update(id, name, (error, changes) => {
        if (error) {
            return res.status(500).send("Internal Server Error");
        }
        console.log(changes);
        res.redirect("/categorias");
    });
    
};

const destroy = (req, res) => {
    const { id } = req.params;
    modelCategories.destroy(id,(error, changes) => {
        if (error) {
            return res.status(500).send("Internal Server Error");
        }
        console.log(changes);
        res.redirect("/categorias");
    });

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