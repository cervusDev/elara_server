import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Strategy } from 'passport-local';
import { MESSAGES } from './constants/messages';
import { PassportStrategy } from '@nestjs/passport';
import { AuthUsecase } from '../../../module/auth/usecase/auth.usecase';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(forwardRef(() => AuthUsecase))
    private readonly authService: AuthUsecase,
  ) {
    super({ usernameField: 'email' });
  }

  async validate(username: string, password: string) {
    const user = await this.authService.validateUser({ username, password });

    if (!user)
      throw new UnauthorizedException(MESSAGES.PASSWORD_OR_EMAIL_INVALID);

    return user;
  }
}
