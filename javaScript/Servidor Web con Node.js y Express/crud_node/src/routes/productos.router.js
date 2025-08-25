const express = require("express");
const router = express.Router();

const controller = require("../controllers/productos.controller");

router.get("/", controller.index);

router.get("/:id", controller.show);

/*
importamos a router como un modulo para poder ser usado por fuera, lo que se está exportando son las rutas definidad dentro de este modulo.
Todo este contenido de este archivo (productos.router.js) representa un modulo y lo unico que se esta importando son sus rutas mediante
module.exports = router;.
*/
module.exports = router;