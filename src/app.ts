import * as path from 'path';
import * as fs from 'fs';
import * as http from 'http';
import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import { env } from 'process';
import routes from './routes';
import V1 from './api/v1';

import { notFoundHandler, errorHandler } from './middlewares/errorHandler';

interface RouteItem {
  filename: string
  url: string
}

export default class App {
  private express: express.Application;
  private router: express.Router;
  private server: http.Server;

  constructor() {
    this.express = express();
    this.router = express.Router();
    this.server = http.createServer(this.express);
  }

  public start() {
    this.middleware();
    this.routes();
    return this.server;
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(helmet());

    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(bodyParser.json());

    this.express.use(compression());
    this.express.use(morgan('dev'));
    this.express.use(cors());
  }

  // Configure API endpoints.
  private routes(): void {
    this.express.use(routes);

    this.express.use('/v1/', V1);

    this.express.use(notFoundHandler);
    this.express.use(errorHandler);
  }
}
