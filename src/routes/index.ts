import { Router, Request, Response, NextFunction } from 'express';
import { version } from '../../package.json';
import { env } from 'process';

class Root {
  public router: Router

  constructor() {
    this.router = Router();
    this.initialize();
  }

  private initialize(): void {
    this.router.get('/', this.index);
    this.router.get('/metrics/health', this.health);
  }

  public index(req: Request, res: Response) {
    res.status(200).json({
      message: 'Cabaret API - Red Velvet Inc.',
      status: 'OK',
      version
    });
  }

  public health(req: Request, res: Response) {
    res.status(200).json({
      status: 'OK'
    });
  }
}

export default new Root().router;
