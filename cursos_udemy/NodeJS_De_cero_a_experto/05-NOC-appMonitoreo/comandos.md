## CRON

Cron es una herramienta robusta para ejecutar tareas (funciones o comandos) según programaciones definidas con la sintaxis cron.
¡Ideal para tareas como copias de seguridad de datos, notificaciones y mucho más!

Intalar: `npm i cron`.

## ENV-VAR

Env-var es uan libreria que nos permite configurar las variables de entorno, dandoles un tipado de dato e importancia o requerimiento para la ejecución del proyecto.

Instalar: `npm i env-var`.

## DOTENV

Para la manipulación de las variables de entorno.

Instalar: `npm i dotenv`.

## NODEMAILER

Nodemailer es la biblioteca de envío de correo electrónico más popular para Node.js. Permite enviar correos electrónicos de forma sencilla y segura, sin dependencias en tiempo de ejecución que gestionar.

Instalar: `npm install nodemailer`.

Tambien toca instalar `npm i --save-dev @types/nodemailer` como dependencia de desarrollo, osea solo ejecuta ese comando y ya. Esto pasa porque nodemailer no fue escrito en TypeScript, pero tiene un archivo de definición (DT).

## MONGOOSE
Dependencia para realizar conexiones y persistencias a bases de datos de MongoDB.

Instalar: `npm install mongoose`.


## COMANDOS PARA  LEVANTAR LAS BASES DE DATOS
Para levantar las bases de datos de mongo y postgres que se tienen configuradas en este proyecto en lso archivos docker-compose.yml usa el comando `docker compose up -d`, el comando se deje de ejecutar en la terminal con la ruta del proyecto, con las configuraciones que se tienen en el archivo docker-compose.yml si no tiene las imagenes de las bases de datos instaladas en docker con el comando anterior las  crear automaticamenete gracias a la configuración que tenemos en el archivo docker-compose.yml.


## PRISMA

### Instalar Prisma (versión estable recomendada)
En este caso se instaló la versión 6 con el comando `npm install prisma@6 --save-dev` e instalamos el cliente con `npm install @prisma/client@6`, luego inicializar prisma con `npx prisma init` esto crea:

```
prisma/
  └── schema.prisma
.env
```

