const express = require("express");
const router = express.Router();

//Esto le indica que en la ruta principal ("/") imprima "Hola Mundo!"
router.get("/", (req, res)=>{
    res.send("Hola Mundo!!!");
});

module.exports = router;