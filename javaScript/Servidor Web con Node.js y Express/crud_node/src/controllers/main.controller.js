const path = require("path");


/*.sendFile es un metodo que requiere rutas absoluta, con ruta absoluta nos referimos a todas las carpetas que se encuentran
detras del archivo donde nos encontramos ubicasdos (toda la ruta hasta el disco D en este caso).
path.resolve es para ir o pasar por cada carpeta en la ruta absoluta.
El __dirname nos trae la ruta completa de dicho archivo en esta maquina*/
const index =  (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../private/index.html'));
}

//De esta forma se exportan funciones en expecifica para que sean usadas por fuera
module.exports = {
    index,
}

// module.exports = {//Otra forma de exportar modulos
//     index,
// };