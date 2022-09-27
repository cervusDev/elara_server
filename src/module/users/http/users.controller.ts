import {
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Controller,
} from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import { JwtGuard } from 'src/shared/jwt/guards/jwt.guard';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';
import { UpdateUserUsecase } from '../usecases/update-user.usecase';
import { CreateUserAdminUsecase } from '../usecases/create-user-admin.usecase';
import { CreateCommonUserUsecase } from '../usecases/create-common-user.usecase';

@Controller('user')
export class UsersController {
  constructor(
    private readonly updateUsecase: UpdateUserUsecase,
    private readonly createAdminUsecase: CreateUserAdminUsecase,
    private readonly createCommonUserUsecase: CreateCommonUserUsecase,
  ) {}

  @UseGuards(JwtGuard)
  @Patch(':id')
  public async update(
    @Param('id') id: number,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    return this.updateUsecase.execute({ id, data });
  }

  @Post('admin')
  public async createAdmin(@Body() input: CreateUserDto) {
    return this.createAdminUsecase.execute(input);
  }

  @UseGuards(JwtGuard)
  @Post('common')
  public async createCommonUser(@Body() input: CreateUserDto) {
    return this.createCommonUserUsecase.execute(input);
  }
}
