import { Request, Response, NextFunction } from 'express';
import { BaseController } from './BaseController';
import { User } from '../models/User';
import { IUser } from '../models/interfaces/UserModel';

export class UserController extends BaseController<IUser>{
  constructor() {
    super(User);
  }
}