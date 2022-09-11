import { Provider } from '@nestjs/common';
import { USER } from 'src/module/users/domain/constant/provider';
import { UserPrismaRepository } from 'src/module/users/repositories/user.prisma';

export const userRepository: Provider = {
  provide: USER.TOKEN_PROVIDER,
  useClass: UserPrismaRepository,
};
