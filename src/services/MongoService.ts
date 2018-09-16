import { connect, Mongoose } from "mongoose";
import config from "../config";

export default class MongoService {
  static instance: Mongoose;

  constructor() {
    MongoService.connect();
  }

  static async connect(): Promise<void> {
    try {
      if (!config.mongoUri) {
        throw new Error("Mongo URI not defined.");
      }

      this.instance = await connect(
        config.mongoUri,
        { useNewUrlParser: true }
      );

      this.instance.connection.once("open", () => {
        console.log("Connected to MongoDB.");
      });
    } catch (err) {
      console.error(err);
    }
  }
}
