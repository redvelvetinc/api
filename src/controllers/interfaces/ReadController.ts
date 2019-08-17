import { NextFunction, Request, Response } from 'express';

export interface IReadController {
  retrieve(req: Request, res: Response, next: NextFunction): any;
  findById(req: Request, res: Response, next: NextFunction): any;
}
