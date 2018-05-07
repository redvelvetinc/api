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
    this.router.post('/', this.controller.create);
    this.router.put('/:_id', this.controller.update);
    this.router.delete('/:_id', this.controller.delete);
  }
}

export default new HeroRouter();