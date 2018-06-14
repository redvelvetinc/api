import { Document, Model } from 'mongoose'

export interface IHero extends Document {
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export interface IHeroModel extends Model<IHero> {}