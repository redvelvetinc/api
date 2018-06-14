import { Router, Request, Response, NextFunction } from 'express';
import { HeroController } from '../../controllers/HeroController'

class HeroRouter {
  public router: Router
  private controller: HeroController;

  constructor() {
    this.router = Router();
    this.controller = new HeroController();
    this.initialize();
  }

  private initialize() : void {
    this.router.get('/', this.controller.retrieve);
    this.router.get('/:_id', this.controller.findById);
  }
}

export default new HeroRouter();