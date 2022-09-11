import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { IoCModule } from './shared/ioc/ioc.module';
import { DomainModule } from './module/domain.module';

@Module({
  imports: [InfraModule, DomainModule, IoCModule],
})
export class AppModule {}
