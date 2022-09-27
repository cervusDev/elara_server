import { hashSync } from 'bcrypt';
import { UseCase } from 'src/shared/base/usecase';
import { USER } from '../domain/constant/provider';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import { IUserRepository } from '../repositories/users.interface';

@Injectable()
export class CreateCommonUserUsecase implements UseCase<User> {
  constructor(
    @Inject(USER.TOKEN_PROVIDER)
    private readonly repository: IUserRepository,
  ) {}
  public async execute({ password, ...rest }: User): Promise<User> {
    const user = await this.repository.create({
      ...rest,
      category: 'common',
      password: hashSync(password, 10),
    });

    return {
      ...user,
      password: null,
    };
  }
}
