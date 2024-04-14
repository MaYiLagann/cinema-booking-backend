import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Configuration } from './config/configuration';
import { AuthenticationModule } from './authentication.module';
import { DatabaseModule } from './database.module';
import { ServiceModule } from './services/service.module';
import { ControllerModule } from './controllers/controller.module';
import { GuardModule } from './guards/guard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Configuration],
    }),
    AuthenticationModule.registerAsync(),
    DatabaseModule.forRootAsync(),
    ServiceModule,
    ControllerModule,
    GuardModule,
  ],
})
export class AppModule {}
