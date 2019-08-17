import { NextFunction, Request, Response } from 'express';

export interface IWriteController {
  create(req: Request, res: Response, next: NextFunction): any;
  update(req: Request, res: Response, next: NextFunction): any;
  delete(req: Request, res: Response, next: NextFunction): any;
}
