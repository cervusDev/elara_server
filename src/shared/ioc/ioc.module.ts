import { Module } from '@nestjs/common';
import { IRepository } from './ioc.repository.';
import { RepositoryService } from './repository.service';

@Module({
  providers: [
    {
      provide: IRepository,
      useClass: RepositoryService,
    },
  ],
  exports: [IRepository],
})
export class IoCModule {}
