import winston, { format } from 'winston';

const { combine, timestamp, json } = format;

const  logger  =  winston . createLogger ( { 
  level : 'info' , 
  format : combine(
    timestamp(),
    json()
  ) , 
//   defaultMeta : {  service : 'user-service'  } , 
  transports : [ 
    // 
    // - Escribe todos los registros con un nivel de importancia de `error` o superior en `error.log` 
    // (es decir, error, fatal, pero no otros niveles) 
    // 
    new  winston . transports . File ( {  filename : 'error.log' ,  level : 'error'  } ) , 
    // new  winston . transports . File ( {  filename : 'warn.log' ,  level : 'warn'  } ) , 
    // 
    // - Escribe todos los registros con un nivel de importancia de `info` o superior en `combined.log` 
    // (es decir, fatal, error, warn e info, pero no trace) 
    // 
    new  winston . transports . File ( {  filename : 'combined.log'  } ) , 
  ] , 
} ) ;

//De esta forma le autorizamos de los logs me lo muestre en consola
logger . add ( new  winston . transports . Console ( { 
    format : winston . format . simple ( ) , 
} ) ) ;

//En el parametro service va el nombre del archivo, ejemplo 'app.js'
export const buildLogger = (service: string) =>{
    return {
        log: (message: string) =>{//la variable donde se almacena a la función buildLogger que se esta exportando se pude uar para pasarle el parametro al atributo 'log' del json
            logger.log('info', {message, service});
        },
        error: (message: string) => {
            logger.error('error',{
                message, service
            });
            // logger.warn('error',{
            //     message, service
            // });
        },
    }
}