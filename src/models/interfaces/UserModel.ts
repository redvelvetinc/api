import { Document, Model } from 'mongoose'

export interface IUser extends Document {
  name: string;
  email: string;
  location: any;
  origin: string;
}

export interface IUserModel extends Model<IUser> { }