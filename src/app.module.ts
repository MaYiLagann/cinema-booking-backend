import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceModule } from './services/service.module';
import { AppDataSourceOptions } from './entities/app-data-source-options';
import { Configuration } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Configuration],
    }),
    TypeOrmModule.forRoot(AppDataSourceOptions()),
    ServiceModule,
  ],
})
export class AppModule {}
