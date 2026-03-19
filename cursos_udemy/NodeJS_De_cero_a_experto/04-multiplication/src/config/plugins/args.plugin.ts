import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',// el valor de alias es de como aparecerá cuando se muestre aúnque se seguira apareciendo tambien como la opción en este caso 'b', pero te puede referir a ella y obtener el valor de la opción con el nombre del alias
        type: 'number',//El tipo de dato o valor de la opción
        demandOption: true,// Indicamos que la opción es requerida, sino marca error
    }).option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,//Podemos agregarle un valor por defecto en caso que la obción no lo tenga o que no se le establesca uno por consola
        describe: 'Multiplication table limit',// Tambien se le puede establecer una descripción
    }).option('s', {
        alias: 'show',
        type: 'boolean',//Tambien estas opciones se le puede establecer valores booleanos, si no le pasas un valor por consola o si no tiene un establecido este arrojará false
        default: false,
        describe: 'Show multiplication table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    // .check(( argv, options ) => {
    //     if( argv.b < 1 ) throw 'Error: La base debe debe ser mayor a 0';
    //     return true;
    // })
    .parseSync();