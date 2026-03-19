## Instalación de paquetes de forma automatica con npm i

`npm i`: Se usa este comando mas que todo cuando te dan un proyecto de node y este no tiene el paquede de node_modules, entonces se usa `npm i` para que instale las dependencias que se encuentran declaradas en el package.json.

## Nodemon

`npm i -D nodemon`: La "-D" hace referencia a que va a instalar un paquete de desarrollo, este paquete de desarrollo se llama "nodemon" y es para que al actulizar los cambios estos se vean reflejados en su dominio y no tener que finalizar la ejecucuion con `contrl + c` y volver actulizarejecutar para ver los cambios, (¡No usar en producción!).[Documentación](https://www.npmjs.com/package/nodemon).

## UUID

`npm i uuid`: Se instala la dependencia de uuid para generar este tipo de identificador.[Documentación](https://www.npmjs.com/package/uuid).

## GET-AGE

`npm i get-age`: Se instala esta dependencia para usarla para calcular la edad de ua persona. (le pasas la fecha de nacimiento, solo el Date y este la calcula con la fecha actual);[Documentación](https://www.npmjs.com/package/get-age "Ir a la documentación").

## AXIOS

`npm i axios`: Se instala para hacer uso de sus funciones HTTP para ahorrarnos codigo en crear una peticions ya que este la las trae estructuradas.[Documentación](https://www.npmjs.com/package/axios "Ir a la documentación").

## WINSTON

` npm i winston`: De esta forma se instala Winston. Winston es la biblioteca de registro (logging) más popular y flexible para Node.js, diseñada para registrar información, errores y eventos de manera estructurada. Permite desacoplar los niveles de registro, formatos y almacenamiento (consola, archivos, bases de datos) utilizando "transportes" para gestionar los logs de forma eficiente.
En pocas palabras es una biblioteca que hace que los log de consolas sean mas flexibles y manipulables, se suele usar mucho para redirigir a donde queremos que mande los logs, si a un archivo .txt, base de datos, archivos locales, a apis de http y mucho mas.[Documentación](https://www.npmjs.com/package/winston).
