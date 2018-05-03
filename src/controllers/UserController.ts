import { Request, Response, NextFunction } from 'express';
import { IBaseController } from "./interfaces/BaseController";
import { IUserModel, IUser } from '../models/interfaces/UserModel';
import { User } from '../models/User';

export class UserController implements IBaseController<IUserModel>{

  async retrieve(req: Request, res: Response, next: NextFunction) {
    try {
      const users: IUser[] = await User.find({})
      res.json({ success: true, data: users });
    } catch (err) {
      next(err)
    }
  }
  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IUser | null = await User.findById(req.params._id);
      res.json({ success: true, data: user });
    } catch (err) {
      next(err);
    }
  }
  create(req: Request, res: Response, next: NextFunction) {
    throw new Error("Method not implemented.");
  }
  update(req: Request, res: Response, next: NextFunction) {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response, next: NextFunction) {
    throw new Error("Method not implemented.");
  }
}