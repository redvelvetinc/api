import * as winston from "winston";
import config from "../config";

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: config.isProduction ? "info" : "debug",
      timestamp: function() {
        return new Date().toISOString();
      }
    })
  ]
});

export default logger;
