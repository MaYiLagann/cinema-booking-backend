import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { ServiceModule } from '../services/service.module';
import { CinemaController } from './cinema/cinema.controller';

@Module({
  imports: [ServiceModule],
  controllers: [UserController, CinemaController],
})
export class ControllerModule {}
