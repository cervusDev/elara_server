import { Global, Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { userRepository } from './repositories/user.repository';

@Global()
@Module({
  exports: [userRepository],
  providers: [userRepository, PrismaService],
})
export class IoCModule {}
