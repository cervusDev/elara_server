import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthUsecase } from '../usecase/auth.usecase';
import { jwt } from 'src/shared/jwt/strategies/constants/jwt';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { JwtStrategy } from 'src/shared/jwt/strategies/jwt.strategy';
import { LocalStrategy } from 'src/shared/jwt/strategies/local.strategy';
import { UsersService } from 'src/module/users/usecases/create-user.usecase';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      privateKey: jwt.secret,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthUsecase,
    LocalStrategy,
    JwtStrategy,
    UsersService,
    PrismaService,
  ],
})
export class AuthModule {}
