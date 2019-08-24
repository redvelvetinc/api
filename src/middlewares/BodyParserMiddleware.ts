import * as bodyParser from 'body-parser';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'before' })
export class BodyParserMiddleware implements ExpressMiddlewareInterface {
  private jsonBodyParser: (req: Request, res: Response, next: NextFunction) => any;

  constructor() {
    this.jsonBodyParser = bodyParser.json();
  }

  use(req: Request, res: Response, next: NextFunction): RequestHandler {
    return this.jsonBodyParser(req, res, next);
  }
}
