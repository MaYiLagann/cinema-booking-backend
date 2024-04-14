import { Module } from '@nestjs/common';
import { ServiceModule } from '../services/service.module';
import { AppController } from './app/app.controller';
import { UserController } from './user/user.controller';
import { CinemaController } from './cinema/cinema.controller';

@Module({
  imports: [ServiceModule],
  controllers: [AppController, UserController, CinemaController],
})
export class ControllerModule {}
