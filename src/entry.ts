import config from "./config";
import { Application } from "./application";

async function main() {
  await new Application().server.listen(config.port, () =>
    console.log(`
    Server start!
    PID: ${process.pid}
    HTTP Server: http://localhost:${config.port}
    MODE: ${config.env}
    `)
  );
}

main();
