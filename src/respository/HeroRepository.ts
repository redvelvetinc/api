import { RepositoryBase } from "./RepositoryBase";
import { IHero } from "../models/interfaces/HeroModel";
import { Hero } from "../models/Hero";

export class HeroRepository extends RepositoryBase<IHero>{
  constructor () {
    super(Hero)
  }
}