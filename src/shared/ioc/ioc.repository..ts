import { IUserRepository } from 'src/module/users/repositories/users.interface';

export abstract class IRepository {
  abstract user: IUserRepository;
}
