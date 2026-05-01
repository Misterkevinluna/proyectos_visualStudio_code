import { Server } from "./presentation/Server";
import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase, LogModel } from "./data/mongo";


(async () => {
    main();
})();

async function main() {
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    });

    Server.start();
    // console.log(envs);
}