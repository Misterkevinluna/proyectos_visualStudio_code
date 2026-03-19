// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// console.log(emailTemplate );

// const { getUserById } = require('./js-foundation/03-callbacks');

// const id = 1;

// getUserById(id, (error, user) =>{
//     if ( error ) throw new Error( error );

//     console.log({user});
// });

// ----------- 05 ----------P
// const { getAge, getUuid } = require('./plugins');
// const { buildMakePerson } = require('./js-foundation/05-factory');


// const makePerson = buildMakePerson({ getAge, getUuid });

// const obj = {name: 'kevin', birthdate: '2002-08-22'};
// const kevin = makePerson( obj );

// console.log(kevin);


// ------------ 06 -----------
//Se aplica la misma estructura aquí en app.js para los dos tipos de peticiones que se hacen en 06-promises
// const getPokemonById = require('./js-foundation/06-promises');

// getPokemonById(4)
// .then( ( pokemon ) => console.log({ pokemon }) )
// .catch( ( error ) => console.error(error) )
// .finally( () => console.log('Finalmente') );


//------------ Usando Winston -------------
// const { buildLogger } = require('./plugins');

// const logger = buildLogger('app.js');
// logger.log('Hola mundo');
// logger.error('Un error muy fatal');




//__________________ Inicio  TypeScript _____________________


//------------ Usando Winston -------------

import { buildLogger } from "./plugins/logger.plugin";
const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('Un error muy fatal');