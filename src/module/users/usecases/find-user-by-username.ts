import { Inject } from '@nestjs/common';
import { UseCase } from 'src/shared/base/usecase';
import { USER } from '../domain/constant/provider';
import { User } from '../domain/entities/user.entity';
import { IUserRepository } from '../repositories/users.interface';

export class FindUserByUsernameUsecase implements UseCase<string, User> {
  constructor(
    @Inject(USER.TOKEN_PROVIDER)
    private readonly repository: IUserRepository,
  ) {}
  public async execute(username: string): Promise<User> {
    return this.repository.getByUsername(username);
  }
}
