import { Router, Request, Response, NextFunction } from 'express';
import HeroesService from '../../services/HeroesService';

const Heroes = HeroesService();

class HeroRouter {
  public router: Router

  constructor() {
    this.router = Router();
    this.initialize();
  }

  private initialize() : void {
    this.router.get('/', this.getAll);
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    res.json(Heroes);
  }
}

export default new HeroRouter();