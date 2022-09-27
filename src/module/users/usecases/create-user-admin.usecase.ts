import { hashSync } from 'bcrypt';
import { USER } from '../domain/constant/provider';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { IUserRepository } from '../repositories/users.interface';

@Injectable()
export class CreateUserAdminUsecase {
  constructor(
    @Inject(USER.TOKEN_PROVIDER)
    private readonly repository: IUserRepository,
  ) {}

  async execute({ password, username }: CreateUserDto): Promise<User> {
    const user = await this.repository.createUserAdmin({
      username,
      category: 'admin',
      password: hashSync(password, 10),
    });

    return {
      ...user,
      password: null,
    };
  }
}
