import { Body, Controller, Get, HeaderParam, Param, Post } from 'routing-controllers';

import { IAccount } from '../../_models/interfaces/IAccount';

@Controller('/auth')
export class AccountController {
  /**
   * This Resource should:
   * 1. Validate payload
   * 2. Try to log in with credentials
   * 3. Return a token
   *
   * @param {object} credentials
   */
  @Post('/login')
  login(@Body() credentials: { email: string; password: string }): void {
    // TODO: Code...
  }

  /**
   * This Resource should:
   * 1. Get token from request header
   * 2. Invalid Token and remove it from session
   *
   * @param {string} token
   */
  @Post('/logout')
  logout(@HeaderParam('authorization') token: string): void {
    // TODO: Code...
  }

  /**
   * This Resource should:
   * 1. Validate payload
   * 2. Verify if email already exist
   * 3. Create a new Account
   * 4. SEND? a verification email
   *
   * @param {IAccount} account
   */
  @Post('/register')
  register(@Body() account: IAccount): void {
    // TODO: Code...
  }

  /**
   * This Resource should:
   * 1. Validate email format
   * 2. Find an Account with the email
   * 3. Set a token on the Account
   * 4. SEND? a reset email
   *
   * @param {object} payload
   */
  @Post('/password/reset')
  passwordReset(@Body() payload: { email: string }): void {
    // TODO: Code...
  }

  /**
   * This Resource should:
   * 1. Find an Account with the token
   * 2. Return both token and userId
   *
   * @param {string} token
   */
  @Get('/password/reset/confirm/:token')
  getPasswordConfirm(@Param('token') token: string): void {
    // TODO: Code...
  }

  /**
   * This Resource should:
   * 1. Validate payload
   * 2. Find an Account with both userId and token
   * 3. Set the new password
   * 4. SEND? an email with password updated
   *
   * @param {object} payload
   */
  @Post('/password/reset/confirm')
  postPasswordConfirm(@Body()
  payload: {
    password: string;
    confirmPassword: string;
    id: string;
    token: string;
  }): void {
    // TODO: Code...
  }
}
