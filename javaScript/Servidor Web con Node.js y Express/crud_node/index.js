require("dotenv").config();// para levantar las variables de entorno antes de leerlas.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo!");
});
/* "process.env.PORT" para leer las variables de entorno, en este caso esta leyendo la variable de entorno PORT. Si existe la variable de entorno la usa, sino usa el valor 3001*/
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http:localhost:${PORT}`));