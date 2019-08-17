import { BaseRepository } from "./base/BaseRepository";
import { Mailing, IMailingModel } from "./../models/Mailing";

export class MailingRepository extends BaseRepository<IMailingModel> {
  constructor() {
    super(Mailing);
  }
}
