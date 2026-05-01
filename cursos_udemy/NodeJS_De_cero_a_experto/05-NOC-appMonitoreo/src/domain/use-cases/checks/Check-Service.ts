import { LogEntity, LogSeverityLevel } from "../../entities/Log.entity";
import { LogRepository } from "../../repository/Log.repository";

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;

export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback,
    ) { }

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Error on check service ${url}`);
            }
            const log = new LogEntity({
                message: `Service ${url} working`,
                level: LogSeverityLevel.low,
                origin: 'Check-Service.ts'
            });
            //Este tipo de logica ejecuta la linea de codigo que se encuentra despues o delante de los && solo si se cumple la condición que está antes, en este caso si this.successCallback es true, trae datos o informaión
            this.successCallback && this.successCallback();
            this.logRepository.saveLog(log);
            return true;
        } catch (error) {
            const errorMessage = new LogEntity({
                message: `${url} is not ok. ${error}`,
                level: LogSeverityLevel.high,
                origin: 'Check-Service.ts'
            });
            this.logRepository.saveLog(errorMessage);
            //Este tipo de logica ejecuta la linea de codigo que se encuentra despues o delante de los && solo si se cumple la condición que está antes, en este caso si this.errorCallback es true, trae datos o informaión
            this.errorCallback && this.errorCallback(errorMessage.message);
            return false;
        }
    }

}