import { path, PUBLIC_PATH } from '../config/file-paths.js';
import { envs } from '../config/envs.js';
import express, { Router } from 'express';
// import path from 'path';


type ServerOptions = {
    port?: number;
    filePublic?: string;
    publicPath?: string;
    routes: Router;
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly filePublic: string;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor({
        port = envs.PORT,
        filePublic = envs.PUBLIC_FILE ?? 'public',
        publicPath = PUBLIC_PATH,
        routes
    }: ServerOptions) {
        this.port = port;
        this.filePublic = filePublic;
        this.publicPath = publicPath;
        this.routes = routes;
    }

    async start() {
        //* Middleware
        //Declarando estructura de datos que acepta mi api en las peticiones post u otra que mande un body
        this.app.use( express.json() );// estructura: raw -> JSON
        this.app.use( express.urlencoded( { extended: true } ) );// estructura x-ww-from-urlencoded

        //* Public Folder
        this.app.use( express.static(this.filePublic) );//Sirviendo todo lo que está en la carpeta public para que le agregue los estilos al html.
        
        //* Routes
        this.app.use( this.routes );

        this.app.use((req, res) => {
            //path.resolve se usa convertir una ruta relativa en una ruta absoluta real del sistema.
            const indexPath = path.join(this.publicPath, 'index.html');
            res.sendFile(indexPath);
        });

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${ this.port }`);
        });
    };
}