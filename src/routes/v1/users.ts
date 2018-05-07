import { Router, Request, Response, NextFunction } from 'express';
import { UserController } from '../../controllers/UserController'

class UserRouter {
  public router: Router
  private controller: UserController;

  constructor() {
    this.router = Router();
    this.controller = new UserController();
    this.initialize();
  }

  private initialize(): void {
    this.router.get('/', this.controller.retrieve);
    this.router.get('/:_id', this.controller.findById);
    this.router.post('/', this.controller.create);
    this.router.put('/:_id', this.controller.update);
    this.router.delete('/:_id', this.controller.delete);
  }
}

export default new UserRouter();