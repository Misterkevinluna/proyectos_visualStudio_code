import { LogEntity, LogSeverityLevel } from "../entities/Log.entity";

export abstract class LogRepository {
    abstract saveLog( log: LogEntity ): Promise<void>;
    abstract getLogs( logSeverityLevel:LogSeverityLevel ): Promise<LogEntity[]>;
}