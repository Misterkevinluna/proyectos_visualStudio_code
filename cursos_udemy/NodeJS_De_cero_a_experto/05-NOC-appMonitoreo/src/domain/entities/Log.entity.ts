export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export interface LogEntityOptions {
    level: LogSeverityLevel;
    message: string;
    origin: string;
    createdAt?: Date;
};

export class LogEntity {
    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor(options: LogEntityOptions) {
        const { message, level, origin, createdAt = new Date() } = options;
        this.message = message;
        this.level = level;
        this.createdAt = createdAt;
        this.origin = origin;
    }
    //Función para pasar un json plano como {"nombre": "kevin"} a un json de js {nombre: "kevin"}
    static fromJson = (json: string): LogEntity => {
        json = (json === '') ? '{}' : json;
        const { level, message, createdAt, origin } = JSON.parse(json);
        const log = new LogEntity({
            level,
            message,
            createdAt,
            origin
        });

        return log;
    };

    /*El tipo de dato del parametro 'object' especifica la estructura de un json plano, no tiene un tipo de dato especifico como una clase, interface o type
    simplemente le dice que esperamos la estructura de un json donde los atributos osea las key son de tipo estrin y los valores de esos atributos son de tipo any
    lo que quiere decir que los valores de los atributos del json puden traer cualquier tipo de dato, es como decir 'acepto cualquier json'*/
    static fromObject = ( object: { [key: string]: any } ): LogEntity => {
        const { message, level, createdAt, origin } = object;
        const log = new LogEntity({
            message, level, createdAt, origin
        });

        return log;
    }

}