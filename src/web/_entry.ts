import 'dotenv/config';
import 'reflect-metadata';

import config from '../config';
import logger from '../utils/logger';
import { Application } from './_application';

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
