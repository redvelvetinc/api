import { Document, model, Schema } from 'mongoose';

import { IAccount } from './interfaces/IAccount';

enum AccountTypes {
  ADMIN = 'ADMIN',
  AGENCY = 'AGENCY',
  SINGLE = 'SINGLE',
}

export interface IAccountModel extends IAccount, Document {}

const UserSchema = new Schema(
  {
    email: {
      required: 'Email cannot be empty.',
      type: String,
      unique: true,
    },
    password: {
      required: 'Password cannot be empty.',
      type: String,
      minlength: 6,
    },
    acceptedTerms: {
      type: Boolean,
    },
    accountType: {
      type: String,
      enum: [AccountTypes.ADMIN, AccountTypes.AGENCY, AccountTypes.SINGLE],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      unique: true,
    },
    personalProfile: {
      name: {
        required: 'Name cannot be empty.',
        type: String,
      },
      birthDate: {
        required: 'Birth Date cannot be empty.',
        type: Date,
      },
      cpf: String,
      mobile: String,
    },
  },
  { timestamps: true },
);

export const Mailing = model<IAccountModel>('mailing', UserSchema);
