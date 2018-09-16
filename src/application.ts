import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import * as helmet from "helmet";
import * as bodyParser from "body-parser";
import * as compression from "compression";

import { notFoundHandler, errorHandler } from "./middlewares/errorHandler";
import routes from "./routes";
import MongoService from "./services/MongoService";

export class Application {
  server: express.Application;

  constructor() {
    this.server = express();
    this.setup();
  }

  public setup() {
    this.database();
    this.middleware();
    this.routes();
  }

  // Connect to MongoDB.
  private database(): void {
    MongoService.connect();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.server.use(helmet());

    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(bodyParser.json());

    this.server.use(compression());
    this.server.use(morgan("dev"));
    this.server.use(cors());
  }

  // Configure API endpoints.
  private routes(): void {
    this.server.use(routes);

    this.server.use(notFoundHandler);
    this.server.use(errorHandler);
  }
}
