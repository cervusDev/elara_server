import { Module } from '@nestjs/common';
import { CreateUserUsecase } from '../usecases/create-user.usecase';
import { UpdateUserUsecase } from '../usecases/update-user.usecase';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [CreateUserUsecase, UpdateUserUsecase],
})
export class UsersModule {}
