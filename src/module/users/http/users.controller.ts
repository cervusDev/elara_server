import { hashSync } from 'bcrypt';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UsersService } from '../usecases/create-user.usecase';
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('admin')
  async create(@Body() { username, password }: CreateUserDto) {
    const existAdmin = await this.usersService.findByUsername('admin');

    if (existAdmin) {
      throw new BadRequestException('admin user already exists.');
    }

    const user = await this.usersService.create({
      username,
      password: hashSync(password, 10),
      category: 'admin',
    });

    return {
      ...user,
      password: null,
    };
  }
}
