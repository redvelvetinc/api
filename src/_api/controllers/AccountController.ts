import {
  Body,
  Controller,
  Delete,
  Get,
  HeaderParam,
  HttpCode,
  Param,
  Post,
  Put,
} from 'routing-controllers';

import { IAccount } from '../../_models/interfaces/IAccount';
import { IAccountModel } from '../../_models/User';
import { AccountRepository } from '../../_respository/UserRepository';

@Controller('/account')
export class AccountController {
  private repository: AccountRepository;

  constructor() {
    this.repository = new AccountRepository();
  }

  /**
   * This Resource should:
   * 1. Get token from request header
   * 2. Get the user from token payload {userId}
   *
   * @param {string} token
   */
  @Get('/me')
  me(@HeaderParam('authorization') token: string): void {
    // TODO: Code...
  }

  /**
   * This Resource should:
   * 1. Find Account with token
   * 2. Set Account as isEmailVerified = true
   *
   * @param {string} token
   */
  @Get('/confirm-email/:token')
  confirmEmail(@Param('token') token: string): void {
    // TODO: Code...
  }

  @Get()
  async retrieve(): Promise<IAccount[]> {
    const data = await this.repository.retrieve();

    return data;
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<IAccount | null> {
    const data = await this.repository.findById(id);

    return data;
  }

  @HttpCode(201)
  @Post()
  async create(@Body() user: IAccount): Promise<IAccount> {
    const data = await this.repository.create(user as IAccountModel);

    return data;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() user: IAccount): Promise<IAccount | null> {
    const data = await this.repository.update(id as string, user as IAccountModel);

    return data;
  }

  @HttpCode(204)
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<null> {
    await this.repository.delete(id);

    return null;
  }
}
