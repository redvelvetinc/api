import { Document, model, Schema } from 'mongoose';

import config from '../config';

export interface IUser {
  email: string;
  password: string;
  acceptedTerms: boolean;
  accountType: UserTypes;
  isEmailVerified: boolean;
  token: string;
  personalProfile: {
    firstName: string;
    lastName: string;
    birthDate: Date;
    cpf: string;
    mobile: string;
  };
}

enum UserTypes {
  ADMIN = 'ADMIN',
  AGENCY = 'AGENCY',
  SINGLE = 'SINGLE',
}

export interface IUserModel extends IUser, Document {}

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
      enum: [UserTypes.ADMIN, UserTypes.AGENCY, UserTypes.SINGLE],
      default: UserTypes.SINGLE,
      validate: {
        validator: (value: string): boolean => {
          if (value !== UserTypes.ADMIN) {
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
      firstName: {
        required: 'First name cannot be empty.',
        type: String,
      },
      lastName: {
        required: 'Last name cannot be empty.',
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

export const User = model<IUserModel>('user', UserSchema);
