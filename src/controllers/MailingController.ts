import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from 'routing-controllers';

import { IMailing } from '../models/interfaces/IMailing';
import { IMailingModel } from './../models/Mailing';
import { MailingRepository } from './../respository/MailingRepository';

interface HttpResponse {
  success: boolean;
  data?: unknown;
  error?: unknown;
}

@Controller('/mailing')
export class MailingController {
  private repository: MailingRepository;

  constructor() {
    this.repository = new MailingRepository();
  }

  @Get()
  async retrieve(): Promise<HttpResponse> {
    const data = await this.repository.retrieve();

    return { success: true, data };
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<HttpResponse> {
    const data = await this.repository.findById(id);

    return { success: true, data };
  }

  @HttpCode(201)
  @Post()
  async create(@Body() user: IMailing): Promise<HttpResponse> {
    const data = await this.repository.create(user as IMailingModel);

    return { success: true, data };
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() user: IMailing): Promise<HttpResponse> {
    const data = await this.repository.update(id as string, user as IMailingModel);

    return { success: true, data };
  }

  @HttpCode(204)
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<null> {
    await this.repository.delete(id);

    return null;
  }
}
