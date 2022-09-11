import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/infra/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [PrismaModule],
})
export class InfraModule {}
