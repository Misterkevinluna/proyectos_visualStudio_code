import { yarg } from "./config/plugins/args.plugin.js";
import { ServerApp } from "./presentation/server.app.js";


(async () => {
    await main();
})();

async function main() {
    const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg;

    ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}



//________________________________________________________________________

// console.log(process.argv);

// console.log(yarg.b);

// _________________________________________________________________________

// import fs from 'fs';


// let outputMessage = '';
// const base = 5;
// const headerMessage = `
// ==================================================
//                 Tabla del ${ base }
// ==================================================\n
// `;

// for(let i = 1; i <= 10; i++){
//     outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
// }

// outputMessage = headerMessage + outputMessage;
// console.log(outputMessage);

// const outputPath = `outputs`;

// fs.mkdirSync(outputPath, { recursive: true });
// fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
// console.log('File Created!');
