import { AuthUsecase } from '../usecase/auth.usecase';
import { Controller, Post, Req } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthUsecase) {}

  @Post()
  async login(@Req() req: any) {
    return this.authService.login(req.body);
  }
}
