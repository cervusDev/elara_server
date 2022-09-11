import { Injectable } from '@nestjs/common';
import { IUserRepository } from './users.interface';
import { User } from '../domain/entities/user.entity';
import { PrismaService } from 'src/infra/prisma/prisma.service';

@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}
  public async getByUsername(username: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { username } });
  }
  public async create(data: User): Promise<User> {
    return this.prisma.user.create({ data });
  }
  public update(id: number, data: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }
  public getById(id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  public getAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  public delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public createMany?(data: User[], args?: never): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  public count?(): Promise<number> {
    throw new Error('Method not implemented.');
  }
}
