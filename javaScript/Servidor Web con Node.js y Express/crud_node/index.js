require("dotenv").config();// para levantar las variables de entorno antes de leerlas.
const path = require('path');
const express = require("express");



const app = express();


/*express.static sirve todos los archivos que están en la carpeta public.
Se le pasa a .use la carpeta "public" usando express para que tenga la ruta de forma estatica y se usen los estilos que esta contiene
y sean leidos por el html en sus etiquetas <link rel="stylesheet" href="">.*/
app.use(express.static(path.join(__dirname, "public")))

app.set('view engine', 'ejs');//Para la vista view usará el motor de vistas (engine) ejs.
app.set("views", path.join(__dirname, "src/views"));//Aquí le decimos que los views los buscara en una carpeta en particular la cual es "src/views".

//Trallendo el modulo main.router.js, este modulo nos estaria exportando sus rutas.
const mainRouter = require("./src/routes/main.router.js");
//con app.use pedimos que eso que nos exportan sea usado, en este caso las rutas, si no le pasamos el modulo con las rutas a app.use() al acceder a ella las rutas no mustraran nada en pantalla o nno devolveran nada
app.use(mainRouter);

//Lo mismo se aplica con este, solo que esta linea esta mas resumida.
//El '/productos' al inicio es un prefijo para acceder a dicha ruta de adelante, de esta forma nos ahorramos colocarle esa parte de la ruta al primer parametro del router.get() del archivo o modulo productos.router.js.
app.use('/productos', require("./src/routes/productos.router.js"))


/* "process.env.PORT" para leer las variables de entorno, en este caso esta leyendo la variable de entorno PORT. Si existe la variable de entorno la usa, sino usa el valor 3001*/
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http:localhost:${PORT}`));// Con app.listen(PORT le estamos indicando que este servidor solo escuchará por el puerto que contiene PORT.  