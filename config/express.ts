import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';

export default (app: express.Application): void => {
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};