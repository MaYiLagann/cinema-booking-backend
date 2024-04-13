import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { UserRegisterRequestModel } from '../../models/user/user-register-request.model';
import { Response } from 'express';
import { hash } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
  ) {}

  @Post()
  async register(
    @Body() body: UserRegisterRequestModel,
    @Res({ passthrough: true }) res: Response,
  ): Promise<number> {
    if (!body.email || !body.password) {
      res.status(HttpStatus.BAD_REQUEST);
      return 0;
    }

    const salt = this.configService.get<string>('user.password_salt');

    const user = this.userService.create();
    user.email = body.email;
    user.password = await hash(body.password, salt);

    return user.id;
  }
}
