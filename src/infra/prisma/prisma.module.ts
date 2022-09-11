import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DomainModule } from 'src/module/domain.module';

@Module({
  providers: [PrismaService, DomainModule],
})
export class PrismaModule {}
