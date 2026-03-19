import { CreateTable } from "../domain/useCase/createTable.useCase.js";
import { SaveFile } from "../domain/useCase/saveFile.useCase.js";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileDestination: string;
    fileName: string;
}

export class ServerApp {
    static run({ base, limit, showTable, fileDestination, fileName }: RunOptions) {
        console.log('Server running...\n');
        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile()
            .execute({
                fileContent: table,
                fileDestination,
                fileName
            });

        if (showTable) console.log(table);

        (wasCreated)
            ? console.log('File Created!')
            : console.error('File not created!');
    }
}