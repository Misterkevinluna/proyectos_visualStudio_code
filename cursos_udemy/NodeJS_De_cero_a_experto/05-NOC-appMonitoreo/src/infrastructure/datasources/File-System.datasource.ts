import * as fs from 'fs';

import { LogDatasource } from "../../domain/datasources/Log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/Log.entity";


export class FileSystemDatasource implements LogDatasource {
    private readonly logPath = 'logs/';
    private readonly allLogsPath = 'logs/logs-all.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly highLogsPath = 'logs/logs-high.log';

    constructor() {
        this.createLogsFiles();
    }

    private createLogsFiles = () => {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath, { recursive: true });//{ recursive: true } le dice a node: "Crea la carpeta y todas las carpetas padre necesarias si no existen.Y si ya existen, no lances error."
        }
        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach((path) => {
            //verifica si existen cada una de las rutas, si existen no hagas nada. 
            if (fs.existsSync(path)) return;
            //Si pasan la condición es porque no existen, entonces crea la ruta con el archivo y dentro inserta un string vacio
            fs.writeFileSync(path, '');
        });
    }

    private getLogsFromFile = (path: string): LogEntity[] => {
        const content = fs.readFileSync(path, 'utf-8');
        if (content === '') return [];
        //Al solamente llamar el metodo fromJson de la calse entidad LogEntity (LogEntity.fromJson) dentro de map este automaticamente toma el valor que esta iterando y se lo pasa como argumento al metodo fromJson
        const logs = content.split('\n').map(LogEntity.fromJson);//Lo que esta dentro de map es como hacer esto: log => LogEntity.fromJson(log)
        return logs;
    };

    async saveLog(newLog: LogEntity): Promise<void> {
        const logAsJson = `${JSON.stringify(newLog)}\n`;
        fs.appendFileSync(this.allLogsPath, logAsJson);

        if (newLog.level === LogSeverityLevel.low) return;

        if (newLog.level === LogSeverityLevel.medium) {
            fs.appendFileSync(this.mediumLogsPath, logAsJson);
        } else {
            fs.appendFileSync(this.highLogsPath, logAsJson);
        }
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        switch (severityLevel) {
            case LogSeverityLevel.low:
                return this.getLogsFromFile(this.allLogsPath);
                break;
            case LogSeverityLevel.medium:
                return this.getLogsFromFile(this.mediumLogsPath);
                break;
            case LogSeverityLevel.high:
                return this.getLogsFromFile(this.highLogsPath);
                break;
            default:
                throw new Error(`${severityLevel} not implemend`);
                break;
        }
    }

}