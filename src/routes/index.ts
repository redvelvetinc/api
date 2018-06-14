import { Router, Request, Response, NextFunction } from 'express';
import { version } from '../../package.json';

class Root {
  public router: Router

  constructor() {
    this.router = Router();
    this.initialize();
  }

  private initialize(): void {
    this.router.get('/', this.index);
  }

  public index(req: Request, res: Response, next: NextFunction) {
    res.json({
      message: 'Cabaret API - Red Velvet Inc.',
      status: 'online',
      version
    });
  }
}

export default new Root();
