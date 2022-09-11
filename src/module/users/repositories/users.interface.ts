import { User } from '../domain/entities/user.entity';
import { Repository } from 'src/shared/base/repository';

export abstract class IUserRepository extends Repository<User> {
  public abstract getByUsername(email: string): Promise<User>;
}
