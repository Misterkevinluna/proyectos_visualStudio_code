## INICIALIZAR SOLO EL PACKAGE.JSON

`npm init -y`:De esta forma creamos solo el archivo packege.json en caso que lo que quieras sea simplemente gererar este archivo.

## NPX

Segun lo que investigué y entendí cuando usamos npx para instalar un paquete lo instala de forma temporal en la cache, si apago mi pc, lo prendo y vulvo y habro el proyecto ya no tendria el paquete que habia instalado con npx. Esto mismo me habia ocurrido cuando instalé n8n en mi pc y estaba usando npx para instalarlo.

## NPX-NODEMON

`npx nodemon src/app`: Se usa este comando para instalar temporalmente nodemon, creo que al colocarle src/app lo que hace es fijar nodemon en ese archivo, lo cual lo que haría es guardar los cambios automaticamente cuando uno actualiza el archivo de app.js.

`npx nodemon dist/app`: Tambien hace lo mismo esectuando que nodemon aquí lo estamos fijando en el archivo dist/app.js, recuarda que el archivo dist se crea al ejecutar `npx tsc --watch`.

## INSTALAR TYPESCRIPT Y ELEMENTOS DE TYPESCRIPT PAR NODE (dependencias de Desarrollo)

`npm i -D typescript @types/node`: Esto lo que es instalar como dependencias de desarrollo typescript y la aparte en la que se coloca @types/nod segun lo que entendí es para instalar elementos de typescript para node, segun lo que entendí esto se hace con el proposito de que estamos en un proyecto de node o si tenemos un archivo .js poder usar algunos elementos de typescript con la anotacion @types, igual tambien sirve para cuando creemos proyectos de node o js y nesecitemos paquetes o librerias de typeScript estas llevarán o tendran la anotacion @types para referenciarla.

## INICIALIZAR UN PROYECTO DE TYPESCRIPT

`npx tsc --init --outDir dist/ --rootDir src`: Este comando es una forma rápida y eficiente de inicializar un proyecto de TypeScript con una configuración específica desde la terminal, sin tener que editar el archivo tsconfig.json a mano después.

### npx tsc --init

npx: Ejecuta el paquete tsc (TypeScript Compiler) sin necesidad de que esté instalado globalmente en tu computadora. Lo busca en tu carpeta node_modules local o lo descarga temporalmente.

#### --init: **Crea un archivo de configuración llamado tsconfig.json en la carpeta actual con todas las opciones por defecto (la mayoría comentadas).**

### --outDir dist/

Esta bandera le dice a TypeScript: "Cuando compiles mi código, guarda los archivos de JavaScript resultantes en una carpeta llamada dist".

Antes: Tus archivos .js se mezclaban con los .ts.

Después: Tienes una carpeta limpia para producción.

### --rootDir src

Esta bandera le dice al compilador: "Busca mis archivos de código fuente estrictamente dentro de la carpeta src".

Esto ayuda a organizar tu proyecto para que no intente compilar archivos perdidos en la raíz o en otras carpetas que no corresponden al código de la aplicación.

## TSC WATCH

`npx tsc --watch`: Funciona igual al nodemon exceptuando de que nodemon ejecuta la tarea, codigo o programa y WATCH solo detecta los cambios, tengo entendido que este se suele usar mucho para typeScript (aunque nodemon tambien se puede usar en typeScript pero toca configurarlo), entonces con este comando cada vez que actualices este guarda e aplica.

## TS-NODE (dependencias de Desarrollo)

`npm install -D ts-node nodemon`: Este comando basicamente permite poder ejecutar directamente codigo de typeScript en node, es decir, sin tener que transpilarlo, sin tener que configurar nada, ahorrando el paso de la transpilación atypeScript.

## RIMRAF (dependencias de Desarrollo)

`npm install -D rimraf`: Es un paquete que emula el comando de terminal de Linux/Unix rm -rf.

rm: Remove (borrar).

-r: Recursive (borra la carpeta y todo lo que tiene adentro).

-f: Force (no pidas permiso, simplemente bórralo).

¿Para qué se usa en TypeScript?
Cuando trabajas con TypeScript, tu código compilado se guarda en la carpeta dist/. El problema es que, a veces, si borras o renombras archivos en tu carpeta src, los archivos viejos se quedan "viviendo" en la carpeta dist, lo que puede causar errores extraños o confusión.

Para evitar esto, lo ideal es borrar la carpeta dist por completo antes de volver a compilar.

## EXPLICACIÓN DEL ARCHIVO nodemon.json

Esta configuración es el "corazón" de tu entorno de desarrollo. Básicamente, le estás dando instrucciones precisas a Nodemon para que sepa cómo manejar archivos de TypeScript, ya que Nodemon, por defecto, solo entiende JavaScript.

```json
{
  "watch": ["src"], //le decimoos a nodemon que este pendiente a la carpeta src
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "node --loader ts-node/esm ./src/app.ts"
}
/*nuevo cambio en el atributo "exec", antes tenia como valor "npx ts-node ./src/app.ts" ahora  "node --loader ts-node/esm ./src/app.ts" para que pueda correr y ejecutar de la mejor forma ya que me ocacionaba errores*/
```

`"ext": ".ts,.js"`:Le dice a Nodemon: "Mantén tus ojos puestos únicamente en la carpeta src".
Por qué es útil: Si haces cambios en archivos de configuración fuera de esa carpeta (como un .env o el propio package.json), Nodemon no reiniciará el servidor innecesariamente. Solo le importa tu código fuente.

`"ext": ".ts,.js"`:Define qué extensiones de archivo deben disparar un reinicio.
Por qué es útil: Por defecto, Nodemon solo vigila archivos .js. Al añadir .ts, le indicas que cada vez que guardes un cambio en un archivo de TypeScript, debe volver a ejecutar el proyecto.

`"ignore": []`:Aquí puedes listar archivos o carpetas que NO quieres que Nodemon vigile, incluso si están dentro de src.
Ejemplo común: Si tuvieras archivos de logs o tests que cambian constantemente y no quieres que el servidor se reinicie cada vez, los pondrías aquí. Al estar vacío [], no está ignorando nada relevante de lo que vigila.

`"exec": "npx ts-node ./src/app.ts"`:Esta es la instrucción más importante. Le dice: "En lugar de ejecutar el archivo con el comando node, usa este comando especial".

ts-node: Es un motor que permite ejecutar TypeScript directamente en Node.js sin tener que compilarlo a JavaScript primero manualmente. Hace la traducción "al vuelo" en memoria.

./src/app.ts: Es el punto de entrada de tu aplicación, osea ese es el archivo que va a levantar.

## CAMBIOS QUE ME TOCÓ HACERLE AL PROYECTO

### "type": "module" en package.json

Al package.json me toco agregarle el atributo con el valor "type": "module", para que me dejara usar la palabra recervada 'export' que colocamos detras de lo que vamos a esportar, variable, función y demas.

#### Explicación:

Este error ocurre por una incompatibilidad entre cómo TypeScript está configurado para manejar los módulos y el estándar de Node.js que estás intentando usar.

¿Por qué pasa?
El error se debe a la opción "verbatimModuleSyntax": true que tienes en tu tsconfig.json.

Cuando esta opción está activa, TypeScript se vuelve muy estricto: te obliga a usar la sintaxis exacta del sistema de módulos que hayas definido. En tu caso, el compilador cree que estás trabajando en un entorno CommonJS (el sistema viejo de Node con require y module.exports), pero estás usando la palabra reservada export (que es de ES Modules).

### Atributo "exec" del archivo nodemon.json

El atributo "exec"antes tenia como valor "npx ts-node ./src/app.ts" ahora "node --loader ts-node/esm ./src/app.ts" para que pueda correr y ejecutar de la mejor forma ya que me ocacionaba errores.

#### Explicación:

Este es el "error final" de configuración cuando intentas mezclar ES Modules (lo que activamos con "type": "module") con TypeScript.

¿Por qué está pasando?
El error ERR_UNKNOWN_FILE_EXTENSION ocurre porque Node.js, al ver que tu proyecto es de tipo "módulo", intenta ejecutar el archivo .ts directamente como si fuera JavaScript moderno, pero Node no sabe qué hacer con un archivo .ts nativamente.

ts-node por defecto usa el sistema antiguo (CommonJS). Para que funcione con módulos modernos (ESM), necesita un "traductor" adicional.
