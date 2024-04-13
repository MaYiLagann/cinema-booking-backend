import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Configuration } from './config/configuration';
import { DatabaseModule } from './database.module';
import { ServiceModule } from './services/service.module';
import { ControllerModule } from './controllers/controller.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Configuration],
    }),
    DatabaseModule.forRootAsync(),
    ServiceModule,
    ControllerModule,
  ],
})
export class AppModule {}
