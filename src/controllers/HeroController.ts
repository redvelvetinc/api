import { IHeroModel, IHero } from './../models/interfaces/HeroModel';
import { Request, Response, NextFunction } from 'express';
import { IBaseController } from "./interfaces/BaseController";
import { Hero } from '../models/Hero';
import HeroesService from '../services/HeroesService';

const heroesData = HeroesService();

export class HeroController implements IBaseController<IHeroModel>{

  async retrieve(req: Request, res: Response, next: NextFunction) {
    try {
      const heroes: IHero[] = await Hero.find({})
      res.json({ success: true, data: heroes });
    } catch (err) {
     next(err)
    }
  }
  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const hero: IHero|null = await Hero.findById(req.params._id);
      res.json({ success: true, data: hero });
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