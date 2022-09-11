import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from '../usecases/create-user.usecase';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Module({
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
