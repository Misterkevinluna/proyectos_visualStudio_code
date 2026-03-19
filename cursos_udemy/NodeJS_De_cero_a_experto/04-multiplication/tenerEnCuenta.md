## Importante, tener en cuenta:

Este proyecto de node.js usa ES Modules (ESM) no como en el tutorial de usemy que tienen el proyecto configurado con CommonJS.
Por eso algunos comando que usaba la persona en el tutorial no funcionaban con nosostros por que `ts-node` por defecto funciona en modo CommonJS, no en ESM.

### Comando al usar Yargs en este proyecto:

`npx tsx src/app.ts y luego colocas las banderas` ejemplo `npx tsx src/app.ts --base 10`, se usa este, este es el que funciona ya que el que usaban en el tutorial `npx ts-node src/app --base 10` no funcionaba en nustro proyecto por como lo tenemos configurando orientado a ESM.

Recuerda que yargs es una librería para leer, validar y estructurar argumentos que pasas por consola cuando ejecutas tu aplicación.

En otras palabras:
Convierte lo que escribes en la terminal en un objeto usable en tu código.
