import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { DomainModule } from './module/domain.module';
import { IoCModule } from './shared/ioc/ioc.module';

@Module({
  providers: [IoCModule],
  imports: [InfraModule, DomainModule, IoCModule],
})
export class AppModule {}
