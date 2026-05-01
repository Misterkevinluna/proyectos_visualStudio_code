# Forma correcta de configurar un proyecto de Node.js con TypeScript (2026)

Luego de crear tu carpeta donde irá el contenido del proyecto con sus archivos ejecuta los siguientes pasos:

### Usa tsx, que reemplaza:

- ts-node
- nodemon

## Instalar TypeScript:

`npm i -D typescript tsx @types/node rimraf`.

## Instalar TypeScript y demás dependencias incluyendo Nodemon:

`npm i -D typescript @types/node ts-node nodemon rimraf`.

## Creación del archivo tsconfig.json:

`npx tsc --init --outDir dist --rootDir src`.

### Configuración que debes de hacerle al archivo tsconfig.json luego de crearlo:

Dentro del json del archivo tsconfig.json es recomendable colocar los atributos "include" y "exclude", en el caso de este proyecto los tenemos de la siguiente forma:

```
"exclude": ["node_modules"],
"include": ["src/**/*"],

```

#### "include":

include le dice a TypeScript solo compila archivos dentro de src, ejemplo de archivos incluidos:

```
src/app.ts
src/controllers/user.ts
src/services/math.ts

```

El patrón `**/*` significa todos los archivos dentro de src y subcarpetas.

#### "exclude":

Le dice a TypeScript, no analices esta carpeta, en este caso la carpeta node_modules y es importante porque esta carpeta puede tener miles de archivos.

Aunque TypeScript ya lo excluye por defecto, muchos proyectos lo declaran explícitamente por claridad.

#### Qué pasa si no los colocas

TypeScript intenta inferir qué archivos compilar.

En proyectos pequeños no suele haber problema, pero en proyectos grandes puede:

analizar archivos innecesarios

tardar más en compilar

incluir cosas que no quieres compilar

#### Atributo compilerOptions:

Dentro del atributo "compilerOptions" configura los campos con el valor que se muestra, no debes de copiar necesariamente el codigo asi como esta y pegarlo, si "compilerOptions" tiene algunos de los atributos que se muestran simplemente verifica que tenga el valor que se esta mostrando sino cambiacelo y colocacelo, si alguno de los atributos que te mostramos no los tiene el "compilerOptions" agregacelos y colocales el valor que se muestra, los atributos que tengan el valor "NodeNext" pueden ir asi con ese valor o puede ser el valor en minusculas de esta forma "nodenext" cualquiera de las es correcta.

```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "types": ["node"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}

```

Importante, si usas "module": "NodeNext", asegúrate también de tener en package.json:

```
{
  "type": "module"
}

```

porque TypeScript usa esa propiedad para decidir cómo compilar los módulos en Node.

### Pequeño tip que muchos cursos no mencionan:

cuando usas `rootDir: "src"` es buena práctica que todos tus `.ts` estén dentro de `src`, porque si pones uno fuera TypeScript puede lanzar errores de compilación.

## Configuración del archivo nodemon.js:

```
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["dist"],
  "exec": "node --loader ts-node/esm src/app.ts"
}

```

Usamos la configuración en el atributo "exec" de la siguiente forma "exec": "node --loader ts-node/esm src/app.ts" para que cuando node intente ejecutar archivos .js sepa como manejarlos.

## Configuración del archivo package.json:

```
{
  "type": "module",
  "scripts": {
    "dev": "node --loader ts-node/esm src/app.ts",
    "dev:nodemon": "nodemon",
    "build": "rimraf dist && tsc",
    "start": "node dist/app.js"
   }
}

```

#### Configuración del atributo "dev":

En este caso estamos configurando el atributo "dev" de esta forma "dev": "node --loader ts-node/esm src/app.ts" para que desde la consola al ejecutar el comando `npm run dev` el proyecto se ejecute una sola vez y se finalice, es decir que se ejecuta, muestre los resultados de la ejecución, actualizaciones y cualquier valor que estamos imprimiendo por consola y luego finaliza la ejecución.

#### Configuración del atributo "dev:nodemon":

En este caso estamos configurando el atributo de esta forma "dev:nodemon": "nodemon", para que ejecutar el proyecto con Nodemon usando el siguiente comando `npm run dev:nodemon`.

En estas configuraciones se hace simplemente para cambiar la forma como ejecutamos el proyecto.

#### Configuración del los atributos "name", "version" y "main":

Es buena practica asignarle estos atributos al package.json ya que le da una identidad y clarides a la estructura de la ejecución del proyecto y tener todo bien documentado, estos tres atributos va al mismo nivel dende se encuentra el atributo "type" es decir en la raiz. El atributo "name" es simplemente para que le establescas como valor el nombre del proyecto, el atributo "version" es simplemente para que le establescas como valor la version del proyecto y el atributo "main" es para que le establescas como valor el nombre y tipo de archivo que debe de tener como referencia de donde inicia la logica a la hora de iniciar una ejecución del proyecto, Es como decir que los archivos con el nombre index.js son los que encabezaran parte de la logica en la ejecución del proyecto.
