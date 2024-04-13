import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './entities/database.module';
import { ServiceModule } from './services/service.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule.forRoot(), ServiceModule],
})
export class AppModule {}
