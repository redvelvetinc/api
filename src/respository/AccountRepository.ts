import { Account, IAccountModel } from './../models/Account';
import { BaseRepository } from './base/BaseRepository';

export class AccountRepository extends BaseRepository<IAccountModel> {
  constructor() {
    super(Account);
  }
}
