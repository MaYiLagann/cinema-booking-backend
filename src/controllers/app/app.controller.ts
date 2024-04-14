import { Controller, Get, Render } from '@nestjs/common';
import { Public } from '../../decorators/public.decorator';

@Controller()
export class AppController {
  @Public()
  @Get()
  @Render('index')
  root() {
    return {};
  }

  @Public()
  @Get('sign-up')
  @Render('sign-up')
  signUp() {
    return {};
  }
}
