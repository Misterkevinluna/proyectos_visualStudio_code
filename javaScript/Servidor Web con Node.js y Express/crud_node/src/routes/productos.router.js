const express = require("express");
const router = express.Router();

const querystring = require("querystring");//querystring me permite traer los datos que vienen a traves de query o tambien conocidos como queryParams

router.get("/", (req, res) => {
    console.log(req.query);
    const query = querystring.stringify(req.query);
    console.log(query);
    fetch('https://fakestoreapi.com/products?' + query)
        .then(response => response.json())
        .then(productos => res.json(productos));
});

router.get("/:id", (req, res) => {
    fetch('https://fakestoreapi.com/products/' + req.params.id)
        .then(response =>response.json())
        .then(producto => res.json(producto));
});

/*
importamos a router como un modulo para poder ser usado por fuera, lo que se está exportando son las rutas definidad dentro de este modulo.
Todo este contenido de este archivo (productos.router.js) representa un modulo y lo unico que se esta importando son sus rutas mediante
module.exports = router;.
*/
module.exports = router;