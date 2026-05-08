import { AppRoutes } from "./presentation/routes.js";
import { Server } from "./presentation/server.js";

(async () => {
    main();
})();

function main() {
    const server = new Server({
        routes: AppRoutes.routes
    }).start();
};