import * as process from 'process';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: (process.env['DATABASE_TYPE'] as 'mysql') ?? 'mysql',
      host: process.env['DATABASE_HOST'] ?? 'localhost',
      port: Number(process.env['DATABASE_PORT']) || 3306,
      username: process.env['DATABASE_USERNAME'],
      password: process.env['DATABASE_PASSWORD'],
      database: process.env['DATABASE_DATABASE'],
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
