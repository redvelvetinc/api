import { IMailingModel, Mailing } from '../_models/Mailing';
import { BaseRepository } from './base/BaseRepository';

export class MailingRepository extends BaseRepository<IMailingModel> {
  constructor() {
    super(Mailing);
  }
}
