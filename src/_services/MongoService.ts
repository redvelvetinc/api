import { connect, Mongoose } from 'mongoose';

import config from '../config';
import logger from '../utils/logger';

export default class MongoService {
  static instance: Mongoose;

  constructor() {
    MongoService.connect();
  }

  static async connect(): Promise<void> {
    try {
      if (!config.mongoUri) {
        throw new Error('Mongo URI not defined.');
      }

      this.instance = await connect(
        config.mongoUri,
        { useNewUrlParser: true, useCreateIndex: true },
      );

      this.instance.connection.once('open', () => {
        logger.info('Connected to MongoDB.');
      });
    } catch (err) {
      logger.error(err);
    }
  }
}
