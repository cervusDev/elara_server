import { Category, User as UserPrisma } from '@prisma/client';

export class User implements Partial<UserPrisma> {
  id?: number;

  username: string;
  password: string;

  category?: Category;

  createdAt?: Date;
  updatedAt?: Date;

  deletedAt?: Date;
}
