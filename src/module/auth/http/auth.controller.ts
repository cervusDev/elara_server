import { AuthUsecase } from '../usecase/auth.usecase';
import { Controller, forwardRef, Inject, Post, Req } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(forwardRef(() => AuthUsecase))
    private readonly authService: AuthUsecase,
  ) {}

  @Post()
  async login(@Req() req: any) {
    return this.authService.login(req.body);
  }
}
