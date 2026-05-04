import path from 'path';
import { fileURLToPath } from 'url';
import { envs } from './envs.js';

//CENTRALIZACIÓN DE RUTAS

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export { path };//Solo usar si el archivo que importe file-paths.ts fuera a usar alguna otra variable, mientras tanto no.
export const ROOT_PATH = path.join(__dirname, '../../');
export const PUBLIC_PATH = path.join(ROOT_PATH, envs.PUBLIC_PATH);