import { Injectable } from '@nestjs/common';
import { USER } from 'src/constants/base.constant';
import { ErrorHelper } from 'src/helpers/error.utils';

import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}
  async findOne() {
    return USER;
  }

  async createUser(user: CreateUserDto) {
    return this.userRepository.create(user);
  }

  async findById(id: string) {
    return this.userRepository.findById(id);
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async updateUser(id: string, params: UpdateUserDto) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      ErrorHelper.BadRequestException('User does not exist');
    }
    return this.userRepository.updateItem({ ...user, ...params });
  }

  async deleteUser(id: string) {
    return this.userRepository.removeItem({ id });
  }
}
