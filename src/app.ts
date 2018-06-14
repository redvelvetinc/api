import * as path from 'path';
import * as fs from 'fs';
import * as http from 'http';
import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';

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
    const routes: Array<RouteItem> = this.list(path.join(__dirname, 'routes'));

    for (const route of routes) {
      const resource = require(route.filename).default;
      this.express.use(route.url, resource.router);
    }

    this.express.use(notFoundHandler);
    this.express.use(errorHandler);
  }

  private list(dir: string, filelist: Array<RouteItem> = []): Array<RouteItem> {
    return fs.readdirSync(dir)
      .reduce((routes, file) => {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
          return this.list(path.join(dir, file), filelist)
        }
        if (file.slice(-3) === '.js') {
          const filename = path.join(dir, file);
          const namespace = dir.split('routes')[1];
          const resource = !file.includes('index') ? file.slice(0, -3) : '';
          filelist.push({ filename, url: `${namespace}/${resource}` });
        }
        return routes;
      }, filelist);
  }
}