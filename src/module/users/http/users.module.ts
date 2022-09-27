import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UpdateUserUsecase } from '../usecases/update-user.usecase';
import { CreateCommonUserUsecase } from '../usecases/create-common-user.usecase';
import { CreateUserAdminUsecase } from '../usecases/create-user-admin.usecase';

@Module({
  controllers: [UsersController],
  providers: [
    UpdateUserUsecase,
    CreateUserAdminUsecase,
    CreateCommonUserUsecase,
  ],
})
export class UsersModule {}
