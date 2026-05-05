import { path, PUBLIC_PATH } from '../config/file-paths.js';
import { envs } from '../config/envs.js';
import express from 'express';
// import path from 'path';


export class Server {
    constructor(
        private readonly port:number = envs.PORT,
        private readonly publicPath:string = PUBLIC_PATH,
        private readonly app = express()
    ){}

    async start() {

        //* Middleware

        //* Public Folder
        this.app.use( express.static('public') );//Sirviendo todo lo que está en la carpeta public para que le agregue los estilos al html.
        
        this.app.use((req, res) => {
            //path.resolve se usa convertir una ruta relativa en una ruta absoluta real del sistema.
            const indexPath = path.join(this.publicPath, 'index.html');
            res.sendFile(indexPath);
        });

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${ 3000 }`);
        });
    };
}