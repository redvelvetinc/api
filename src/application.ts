import * as express from 'express';
import { createExpressServer } from 'routing-controllers';

import MongoService from './services/MongoService';

export class Application {
  server: express.Application;

  constructor() {
    this.server = express();
    this.setup();
  }

  setup(): void {
    this.database();
    this.express();
  }

  private express(): void {
    const controllers = [`${__dirname}/api/controllers/*`];
    const middlewares = [`${__dirname}/api/middlewares/*`];
    const interceptors = [`${__dirname}/api/interceptors/*`];

    this.server = createExpressServer({
      cors: true,
      defaultErrorHandler: false,
      routePrefix: '/api',
      controllers,
      middlewares,
      interceptors,
    });
  }

  private database(): void {
    MongoService.connect();
  }
}
