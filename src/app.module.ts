import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './entities/database.module';
import { UserService } from './services/user/user.service';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
