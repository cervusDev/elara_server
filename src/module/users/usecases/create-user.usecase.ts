import { hashSync } from 'bcrypt';
import { User } from '../domain/entities/user.entity';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { IUserRepository } from '../repositories/users.interface';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { USER } from '../domain/constant/provider';

@Injectable()
export class CreateUserUsecase {
  constructor(
    @Inject(USER.TOKEN_PROVIDER)
    private readonly repository: IUserRepository,
  ) {}

  async execute({ password, username }: CreateUserDto): Promise<User> {
    const existAdmin = await this.repository.getByUsername('admin');

    if (existAdmin) {
      throw new BadRequestException('admin user already exists.');
    }

    const user = await this.repository.create({
      username,
      password: hashSync(password, 10),
      category: 'admin',
    });

    return {
      ...user,
      password: null,
    };
  }
}
