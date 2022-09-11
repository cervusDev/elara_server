import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Category } from '@prisma/client';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { User } from 'src/module/users/domain/entities/user.entity';
import { UsersService } from 'src/module/users/usecases/create-user.usecase';

interface Payload {
  sub: number;
  username: string;
  admin: boolean;
  category?: Category;
}

@Injectable()
export class AuthUsecase {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UsersService))
    private readonly UserService: UsersService,
  ) {}
  async login(login: User) {
    const user = await this.UserService.findByUsername(login.username);
    const isAdmin = this.isAdmin(user.category);
    const payload = this.performPayload(isAdmin, user);

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const user = await this.UserService.findByUsername(username);

    if (!user) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  private isAdmin(category: Category) {
    if (category) {
      return true;
    }
    return false;
  }

  private performPayload(isAdmin: boolean, user: User): Payload {
    if (isAdmin) {
      return {
        sub: user.id,
        username: user.username,
        admin: isAdmin,
      };
    }

    return {
      sub: user.id,
      username: user.username,
      admin: isAdmin,
      category: user.category,
    };
  }
}
