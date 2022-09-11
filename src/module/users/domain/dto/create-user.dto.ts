import { Category } from '@prisma/client';
import { User } from '../entities/user.entity';

export class CreateUserDto implements Partial<User> {
  id?: number;

  username: string;
  password: string;

  category?: Category;

  createdAt?: Date;
  updatedAt?: Date;

  deletedAt?: Date;
}
