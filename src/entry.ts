import { Application } from './application';
import config from './config';
import logger from './utils/logger';

async function main() {
  await new Application().server.listen(config.port, () =>
    logger.info(`
    Server start!
    PID: ${process.pid}
    HTTP Server: http://localhost:${config.port}
    MODE: ${config.env}
    `),
  );
}

main();
