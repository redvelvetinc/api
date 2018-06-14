import Database from '../config/database';
import { Schema } from 'mongoose';
import { IHeroModel, IHero } from './interfaces/HeroModel';

const HeroSchema = new Schema({
  superhero: {
    required: true,
    type: String,
  },
  publisher: {
    required: true,
    type: String,
  },
  alter_ego: {
    type: String,
  },
  first_appearance: {
    type: String,
  },
  characters: {
    type: String,
  },
});

export const Hero = Database.connection.model<IHero>('Hero', HeroSchema, 'Heroes') as IHeroModel;