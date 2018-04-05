import * as express from 'express';

const routes = (app: express.Application): void => {
  // app.use('/api/views', view);

  // All other routes should 404
  app.route('/*')
    .get((req: express.Request, res: express.Response) => {
      res.sendStatus(404)
    });
};

export default routes;