import { Router, Request, Response, NextFunction } from 'express';
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
    res.json({message: 'Welcome!'});
  }
}

export default new Root();