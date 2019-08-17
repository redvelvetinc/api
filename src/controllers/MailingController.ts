import { BaseController } from "./BaseController";
import { IMailingModel } from "./../models/Mailing";
import { MailingRepository } from "./../respository/MailingRepository";

class MailingController extends BaseController<IMailingModel> {
  constructor() {
    super(new MailingRepository());
  }
}

export default new MailingController();
