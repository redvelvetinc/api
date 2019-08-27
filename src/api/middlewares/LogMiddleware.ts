import * as morgan from 'compression';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'before' })
export class LogMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction): RequestHandler {
    return morgan('dev')(req, res, next);
  }
}
