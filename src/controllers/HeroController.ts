import { Request, Response, NextFunction } from 'express';
import { BaseController } from './BaseController';
import { Hero } from '../models/Hero';
import { IHero } from '../models/interfaces/HeroModel';

export class HeroController extends BaseController<IHero>{
  constructor () {
    super(Hero)
  }
}