import { Document, model, Schema } from 'mongoose';

import { IMailing } from './interfaces/IMailing';

export interface IMailingModel extends IMailing, Document {}

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      required: 'Email cannot be empty.',
      type: String,
    },
    location: {
      type: String,
    },
    origin: {
      type: String,
      default: '*',
    },
  },
  { timestamps: true },
);

export const Mailing = model<IMailingModel>('mailing', UserSchema);
