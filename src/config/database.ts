import * as Mongoose from 'mongoose';
import { env } from 'process'

class Database {
  static instance: any;
  static connection: Mongoose.Connection;

  constructor() {
    Database.connect();
  }

  static connect(): Mongoose.Connection {
    if (this.instance) return this.instance;

    this.connection = Mongoose.connection;
    this.connection.once('open', () => {
      console.log('Connected to MongoDB.');
    });

    this.instance = Mongoose.connect(`${env.MONGODB_URI}`);

    return this.instance;
  }
}

Database.connect();
export default Database;