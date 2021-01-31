import 'dotenv/config';

import config from './config';
import server from './server';
import logger from './utils/logger';

async function main(): Promise<void> {
  await server.listen(config.port);
  logger.info(`Running at http://localhost:${config.port}`);
}

process.on('unhandledRejection', (err) => {
  if (err) {
    logger.error(err);
  }
  process.exit(1);
});

main();
