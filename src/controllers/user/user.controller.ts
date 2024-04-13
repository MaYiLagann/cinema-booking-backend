import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { UserRegisterRequestModel } from '../../models/user/user-register-request.model';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  register(
    @Body() body: UserRegisterRequestModel,
    @Res({ passthrough: true }) res: Response,
  ): number {
    if (!body.email || !body.password) {
      res.status(HttpStatus.BAD_REQUEST);
      return 0;
    }

    const user = this.userService.create();
    user.email = body.email;
    // user.password = body.password; // Todo: Hashing.

    return user.id;
  }
}
