import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import { JwtGuard } from 'src/shared/jwt/guards/jwt.guard';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';
import { CreateUserUsecase } from '../usecases/create-user.usecase';
import { UpdateUserUsecase } from '../usecases/update-user.usecase';

@Controller('user')
export class UsersController {
  constructor(
    private readonly createUsecase: CreateUserUsecase,
    private readonly updateUsecase: UpdateUserUsecase,
  ) {}

  @Post('admin')
  public async create(@Body() { username, password }: CreateUserDto) {
    return this.createUsecase.execute({ username, password });
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  public async update(
    @Param('id') id: number,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    return this.updateUsecase.execute({ id, data });
  }
}
