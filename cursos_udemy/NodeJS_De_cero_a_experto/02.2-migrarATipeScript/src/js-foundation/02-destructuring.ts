/*con process.env estariamos accediendo a las variables de entorno internas de node, y para acceder a una
// en especifico vasta con colocar un punto seguido del .env y escribir el nombre de la variable */
// console.log( process.env );

//Obteniendo las variables de entornos especificas 
const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;

// console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });

const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [ , , ,batman ] = characters;

// console.log(batman);