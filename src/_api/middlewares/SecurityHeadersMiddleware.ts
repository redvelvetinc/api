import { NextFunction, Request, RequestHandler, Response } from 'express';
import * as helmet from 'helmet';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'before' })
export class SecurityHeadersMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction): RequestHandler {
    return helmet()(req, res, next);
  }
}
