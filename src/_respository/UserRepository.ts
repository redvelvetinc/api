import { IUserModel, User } from '../_models/User';
import { BaseRepository } from './base/BaseRepository';

export class UserRepository extends BaseRepository<IUserModel> {
  constructor() {
    super(User);
  }
}
