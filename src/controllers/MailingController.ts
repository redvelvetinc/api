import { IMailingModel } from './../models/Mailing';
import { MailingRepository } from './../respository/MailingRepository';
import { BaseController } from './BaseController';

class MailingController extends BaseController<IMailingModel> {
  constructor() {
    super(new MailingRepository());
  }
}

export default new MailingController();
