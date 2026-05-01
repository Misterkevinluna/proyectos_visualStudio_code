import { LogRepositoryImpl } from "../infrastructure/repositories/Log.repository.impl";
import { FileSystemDatasource } from "../infrastructure/datasources/File-System.datasource";
import { EmailService } from "./email/email.service";
import { CronService } from "./cron/CronService";
import { CheckService } from "../domain/use-cases/checks/Check-Service";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import MongoLogDatasource from "../infrastructure/datasources/mongo-log.datasource";
import { CheckServiceMultiple } from "../domain/use-cases/checks/Check-Service-Multiple";

// const logRepository = new LogRepositoryImpl(
//     new FileSystemDatasource(),
//     new PostgresLogDatasource()
//     new MongoLogDatasource(),
// );

const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
);

const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource(),
);

const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource(),
);

const emailService = new EmailService();


export class Server {
    public static async start() {
        console.log('Server started...');

        //Mandar email
        // new SendEmailLogs(
        //     emailService,
        //     logRepository
        // ).execute(['kevinluna385@gmail.com', '00kyrieirvin00@gmail.com']);


        // const logs = await logRepository.getLogs(LogSeverityLevel.low);
        // console.log(logs);

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                // const url = 'http://localhost:3000';
                const url = 'https://google.com';
                new CheckServiceMultiple(
                    [fsLogRepository, mongoLogRepository, postgresLogRepository],
                    () => console.log('success'),
                    (error) => console.log(error)
                ).execute(url);
            },
        );

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         // const url = 'http://localhost:3000';
        //         const url = 'https://google.com';
        //         new CheckService(
        //             logRepository,
        //             () => console.log('success'),
        //             (error) => console.log(error)
        //         ).execute(url);
        //     },
        // );
    }
}
