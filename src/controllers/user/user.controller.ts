import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { UserRegisterRequestModel } from '../../models/user/user-register-request.model';
import { Response } from 'express';
import { hash } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UserSignInRequestModel } from '../../models/user/user-sign-in-request.model';
import { JwtService } from '@nestjs/jwt';
import { UserSignInResponseModel } from '../../models/user/user-sign-in-response.model';
import { UserTokenPayload } from '../../models/user/user-token-payload';
import { toPlainObject } from 'lodash';
import { Public } from '../../decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Public()
  @Post('register')
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

    await this.userService.update(user);

    return user.id;
  }

  @Public()
  @Post('sign-in')
  async signIn(
    @Body() body: UserSignInRequestModel,
    @Res({ passthrough: true }) res: Response,
  ): Promise<UserSignInResponseModel> {
    const response = new UserSignInResponseModel();

    if (!body.email || !body.password) {
      res.status(HttpStatus.BAD_REQUEST);
      return response;
    }

    const salt = this.configService.get<string>('user.password_salt');
    const user = await this.userService.getByEmailAndPassword(
      body.email,
      await hash(body.password, salt),
    );

    if (!user) {
      res.status(HttpStatus.UNAUTHORIZED);
      return response;
    }

    const payload = new UserTokenPayload();
    payload.email = user.email;

    response.token = await this.jwtService.signAsync(toPlainObject(payload));
    return response;
  }
}
