
const querystring = require("querystring");//querystring me permite traer los datos que vienen a traves de query o tambien conocidos como queryParams

const index =  (req, res) => {
    console.log(req.query);
    const query = querystring.stringify(req.query);
    console.log(query);
    fetch('https://fakestoreapi.com/products?' + query)
    .then(response => response.json())
    .then(productos => res.render('productos', {productos}));//Con res.render() renderisamos la vista 'productos' y pasamos el contenido de la variable producto
}

const show =  (req, res) => {
    fetch('https://fakestoreapi.com/products/' + req.params.id)
        .then(response =>response.json())
        .then(producto => res.json(producto));
}

module.exports = {
    index,
    show,
}