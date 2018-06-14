import { Router, Request, Response, NextFunction } from 'express';
class Root {
  public router: Router

  constructor() {
    this.router = Router();
    this.initialize();
  }

  private initialize(): void {
    this.router.get('/', this.getAll);
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    res.json({message: 'Welcome!'});
  }
}

export default new Root();