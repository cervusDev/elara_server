import { hashSync } from 'bcrypt';
import { UseCase } from 'src/shared/base/usecase';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import { UpdateUserDto } from '../domain/dto/update-user.dto';
import { IUserRepository } from '../repositories/users.interface';
import { USER } from '../domain/constant/provider';

interface IReq {
  id: number;
  data: UpdateUserDto;
}

@Injectable()
export class UpdateUserUsecase implements UseCase<IReq, User> {
  constructor(
    @Inject(USER.TOKEN_PROVIDER)
    private readonly repository: IUserRepository,
  ) {}
  public async execute({ data, id }: IReq): Promise<User> {
    const user = await this.repository.update(id, {
      ...data,
      password: hashSync(data.password, 10),
    });

    return {
      ...user,
      password: null,
    };
  }
}
