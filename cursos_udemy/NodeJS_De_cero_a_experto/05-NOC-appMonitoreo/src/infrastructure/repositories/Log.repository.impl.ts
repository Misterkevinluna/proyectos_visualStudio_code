import { LogDatasource } from "../../domain/datasources/Log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/Log.entity";
import { LogRepository } from "../../domain/repository/Log.repository"


export class LogRepositoryImpl implements LogRepository{

    constructor(private readonly logDatasource: LogDatasource){}

    async saveLog(log: LogEntity): Promise<void> {
        this.logDatasource.saveLog(log);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDatasource.getLogs(severityLevel);
    }
}