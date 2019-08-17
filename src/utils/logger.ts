import { createLogger, format, transports } from 'winston';

import config from '../config';

const { combine, colorize, json, simple, timestamp } = format;

const logger = createLogger({
  level: config.isProduction ? 'info' : 'debug',
  format: combine(colorize(), json(), simple(), timestamp()),
  transports: [new transports.Console()],
});

export default logger;
