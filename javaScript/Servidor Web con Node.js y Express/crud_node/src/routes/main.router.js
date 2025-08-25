const express = require("express");
const router = express.Router();

const controller = require("../controllers/main.controller");

/*Esto le indica que en la ruta principal ("/") hacer algo, imprimir, llamar, etc. en este caso se 
le está pasando una funcion con el nombre index del archivo main.controller"*/
router.get("/", controller.index);

module.exports = router;


//Esto le indica que en la ruta principal ("/") imprima "Hola Mundo!"
// router.get("/", (req, res)=>{
//     res.send("Hola Mundo!!!");
