import { Router } from 'express';
import { TodoRoutes } from './todos/routes.js';


export class AppRoutes {
    static get routes(): Router {
        const router = Router();
        /*
        Esta vendria siendo una ruta raiz, el segundo parametro (TodoRoutes.routes) le pasa las demas configuraciones de rutas que van delante de esta ('/api/todos')
        Es decir por ejemplo, en TodoRoutes.routes tenemos una configuración de ruta '/:id', si la configuramos o unimos con esta quedaría así '/api/todos/:id'.
        Dependiendo de la ruta re reciba o le manden a express esta mira la coincidencia de la ruta con las que tiene configurada, por ejemplo si express recibe una ruta como esta '/api/todos/bebidas' este mira coincidencias,
        coincidencia inicial de la ruta mandada es esta parte '/api/todos' como coincide con la que tenemos en routes() de la clase AppRoutes ahora mira si el resto de la ruta ('/bebidas') coincide con algunas de las rutas hijas
        que tiene configuradas en TodoRoutes.routes sino manda un error de ruta no encontrada o no existe.
        */
        router.use('/api/todos', TodoRoutes.routes);

        return router;
    };
}