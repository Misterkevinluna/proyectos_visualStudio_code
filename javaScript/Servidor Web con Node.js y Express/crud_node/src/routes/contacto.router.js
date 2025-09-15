const express = require("express");
const router = express.Router();

const controller = require("../controllers/contacto.controller");

/*Esto le indica que en la ruta principal ("/") hacer algo, imprimir, llamar, etc. en este caso se 
le está pasando una funcion con el nombre index del archivo main.controller"*/
router.get("/", controller.index);
router.post("/", controller.submit);

module.exports = router;
