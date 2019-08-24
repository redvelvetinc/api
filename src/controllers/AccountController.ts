import { sign, verify } from 'jsonwebtoken';
import { Body, Controller, Get, HeaderParam, Post } from 'routing-controllers';

import config from '../config';
import { IAccountModel } from './../models/Account';
import { IAccount } from './../models/interfaces/IAccount';
import { AccountRepository } from './../respository/AccountRepository';

@Controller('/account')
export class AccountController {
  private repository: AccountRepository;

  constructor() {
    this.repository = new AccountRepository();
  }

  @Get('/me')
  async me(@HeaderParam('authorization') token: string): Promise<IAccount> {
    // TODO: Isolate this in a middleware
    const { userId }: any = verify(token, config.jwtSecret);

    const user = await this.repository.findById(userId);

    return user;
  }

  @Post('/login')
  async login(@Body() credentials: Partial<IAccount>): Promise<string> {
    const { email, password } = credentials;
    const user = await this.repository.findOneWhere({ email });

    if (!user) {
      throw new Error('Unable to log in with provided credentials.');
    }

    // TODO: Change it for check the hash of password instead.
    if (user.password !== password) {
      throw new Error('Unable to log in with provided credentials.');
    }

    if (!user.isEmailVerified) {
      throw new Error(
        'You have to confirm your email address before continuing. Pleae verify your inbox.',
      );
    }

    const { _id: userId } = user;

    const token = sign({ userId }, config.jwtSecret);

    return `"/login" resource with token: ${token}`;
  }

  @Post('/logout')
  logout(): string {
    // TODO: Invalid Token / Remove from Session
    return '"/logout" resource';
  }

  @Post('/registration')
  async registration(@Body() account: IAccount): Promise<IAccount> {
    // TODO: Verify if email already exists, send email verification

    // new Error('A user is already registered with this e-mail address.');

    const user = await this.repository.create(account as IAccountModel);

    // Send an verification email

    return user;
  }
}
