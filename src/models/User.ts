import Database from '../config/database';
import { Schema } from 'mongoose';
import { IUserModel, IUser } from './interfaces/UserModel';

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  location: {
    type: String,
  },
  origin: {
    type: String,
    default: '*'
  },
}, { timestamps: true });

export const User = Database.connection.model<IUser>('User', UserSchema, 'Users') as IUserModel;