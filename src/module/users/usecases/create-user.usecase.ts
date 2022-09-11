import { Injectable } from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import { IRepository } from 'src/shared/ioc/ioc.repository.';
import { CreateUserDto } from '../domain/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly repository: IRepository) {}

  async create(input: CreateUserDto): Promise<User> {
    return this.repository.user.create(input);
  }

  async findByUsername(username: string): Promise<User> {
    return this.repository.user.getByUsername(username);
  }
}
