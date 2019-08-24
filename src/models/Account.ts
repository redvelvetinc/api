import { Document, model, Schema } from 'mongoose';

import config from '../config';
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
    // TODO: Hash the password when save/modify it
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
      default: AccountTypes.SINGLE,
      validate: {
        validator: (value: string): boolean => {
          if (value !== AccountTypes.ADMIN) {
            return true;
          }

          return config.acceptAdminRegistration;
        },
      },
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
    },
    personalProfile: {
      name: {
        required: 'Name cannot be empty.',
        type: String,
      },
      birthDate: {
        required: 'Birth Date cannot be empty.',
        type: Date,
        validate: {
          validator: (value: Date): boolean => {
            value.setFullYear(value.getFullYear() + 18);
            const currentTime = new Date();
            currentTime.setHours(0, 0, 0, 0);

            return value.getTime() <= currentTime.getTime();
          },
          message: (): string => 'You must be 18 years old.',
        },
      },
      cpf: String,
      mobile: String,
    },
  },
  { timestamps: true },
);

export const Account = model<IAccountModel>('account', UserSchema);
