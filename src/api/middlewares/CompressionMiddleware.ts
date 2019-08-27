import * as compression from 'compression';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'before' })
export class CompressionMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction): RequestHandler {
    return compression()(req, res, next);
  }
}
