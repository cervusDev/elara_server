import { IRepository } from './ioc.repository.';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { UserPrismaRepository } from 'src/module/users/repositories/user.prisma';

@Injectable()
export class RepositoryService implements IRepository, OnApplicationBootstrap {
  constructor(private readonly prisma: PrismaService) {}

  user: UserPrismaRepository;

  onApplicationBootstrap() {
    this.user = new UserPrismaRepository(this.prisma);
  }
}
