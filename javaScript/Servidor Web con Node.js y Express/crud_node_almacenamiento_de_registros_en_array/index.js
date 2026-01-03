require("dotenv").config();// para levantar las variables de entorno antes de leerlas.
const path = require('path');
const express = require("express");
const layouts = require('express-ejs-layouts');
const app = express();
const methodOverride = require('method-override');//modulo para poder usar mas methodos de peticion aparte de los habituales get y post
//Se le dice a express que use el metodo methodOverride y definimos el un parametro y le damos el nombre de _method el cual es el parametro de debe de usar las url para indicar el methodo que se va a usar.
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended: false})); 

/*express.static sirve todos los archivos que están en la carpeta public.
Se le pasa a .use la carpeta "public" usando express para que tenga la ruta de forma estatica y se usen los estilos que esta contiene
y sean leidos por el html en sus etiquetas <link rel="stylesheet" href="">.*/
app.use(express.static(path.join(__dirname, "public")))

//Configurando el motor de vistas(app.set('view engine', 'ejs');) y la carpeta de vistas (app.set("views", path.join(__dirname, "src/views"));)
app.set('view engine', 'ejs');//Le dice a Express:👉 “Cuando use res.render(), los archivos tendrán extensión .ejs por defecto”. Es decir, no necesitas escribir res.render("contacto.ejs"), basta con "contacto".
app.set("views", path.join(__dirname, "src/views"));//Le dice a Express:👉 “Busca las vistas en la carpeta src/views”. Así que al hacer res.render("contacto"), Express va a: src/views/contacto.ejs

app.use(layouts);
/*El "layout" del inicio hace referencia a que el tipo de arvhivo que se le pasará el cual va a buscar de forma predeterminada es de tipo o es un layout,
y luego le indicamos donde se va a encontrar dandole la dirección "layouts/layout"*/
app.set("layout", "layouts/layout");

//Trallendo el modulo main.router.js, este modulo nos estaria exportando sus rutas.
const mainRouter = require("./src/routes/main.router.js");
//con app.use pedimos que eso que nos exportan sea usado, en este caso las rutas, si no le pasamos el modulo con las rutas a app.use() al acceder a ella las rutas no mustraran nada en pantalla o nno devolveran nada.
app.use(mainRouter);

//Lo mismo se aplica con este, solo que esta linea esta mas resumida.
//El '/productos' al inicio es un prefijo para acceder a dicha ruta de adelante, de esta forma nos ahorramos colocarle esa parte de la ruta al primer parametro del router.get() del archivo o modulo productos.router.js.
app.use('/productos', require("./src/routes/productos.router.js"))
app.use('/contacto', require("./src/routes/contacto.router.js"))
app.use('/categorias', require("./src/routes/categorias.router.js"))


/* "process.env.PORT" para leer las variables de entorno, en este caso esta leyendo la variable de entorno PORT. Si existe la variable de entorno la usa, sino usa el valor 3001*/
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http:localhost:${PORT}`));// Con app.listen(PORT le estamos indicando que este servidor solo escuchará por el puerto que contiene PORT.  