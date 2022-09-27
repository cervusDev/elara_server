import { Injectable } from '@nestjs/common';
import { IUserRepository } from './users.interface';
import { User } from '../domain/entities/user.entity';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Injectable()
export class UserPrismaRepository implements Partial<IUserRepository> {
  constructor(private readonly prisma: PrismaService) {}

  public async createUserAdmin(data: User): Promise<User> {
    return this.prisma.user.create({ data });
  }

  public async getByUsername(username: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { username } });
  }

  public async create(data: User): Promise<User> {
    return this.prisma.user.create({ data });
  }

  public async update(id: number, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({ where: { id: +id }, data });
  }

  public async delete(id: number): Promise<void> {
    this.prisma.user.delete({ where: { id } });
  }
}
