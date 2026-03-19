import { yarg } from './config/plugins/args.plugin.js';

const { b:base, l:limit, s:showTable } = yarg;
let outputMessage = '';
const headerMessage = `
==================================================
                Tabla del ${ base }
==================================================\n
`;

for(let i = 1; i <= limit; i++){
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable === true) {
    console.log(outputMessage);
}else{
    console.log(headerMessage);
}
 