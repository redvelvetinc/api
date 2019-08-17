import { NextFunction, Request, Response } from 'express';

// catch 404 and forward to error handler
export function notFoundHandler(req: Request, res: Response, next: NextFunction): void {
  const err: any = new Error('Not Found');
  err.status = 404;
  next(err);
}

// error handler
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
  const { status, message, code } = err;
  res.status(status || 500).json({ error: { status, message, code } });
}
