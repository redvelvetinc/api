import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from 'routing-controllers';

import { IMailing } from '../../models/interfaces/IMailing';
import { IMailingModel } from '../../models/Mailing';
import { MailingRepository } from '../../respository/MailingRepository';

@Controller('/mailing')
export class MailingController {
  private repository: MailingRepository;

  constructor() {
    this.repository = new MailingRepository();
  }

  @Get()
  async retrieve(): Promise<IMailing[]> {
    const data = await this.repository.retrieve();

    return data;
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<IMailing | null> {
    const data = await this.repository.findById(id);

    return data;
  }

  @HttpCode(201)
  @Post()
  async create(@Body() user: IMailing): Promise<IMailing> {
    const data = await this.repository.create(user as IMailingModel);

    return data;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() user: IMailing): Promise<IMailing | null> {
    const data = await this.repository.update(id as string, user as IMailingModel);

    return data;
  }

  @HttpCode(204)
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<null> {
    await this.repository.delete(id);

    return null;
  }
}
