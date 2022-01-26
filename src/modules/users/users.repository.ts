import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/base/base.repository';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository extends BaseRepository<User> {
  constructor(@InjectRepository(User) readonly userModel: Repository<User>) {
    super(userModel);
  }

  async findAll() {
    return this.paginationRepository(this.userModel, { limit: 10, page: 1 });
  }
}
