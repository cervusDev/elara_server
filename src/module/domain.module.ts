import { Module } from '@nestjs/common';
import { AuthModule } from './auth/http/auth.module';
import { UsersModule } from './users/http/users.module';

@Module({
  imports: [UsersModule, AuthModule],
  exports: [UsersModule, AuthModule],
})
export class DomainModule {}
