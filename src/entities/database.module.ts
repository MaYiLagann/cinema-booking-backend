import { TypeOrmModule } from '@nestjs/typeorm';
import process from 'process';
import { User } from './user.entity';
import { DynamicModule } from '@nestjs/common';

export class DatabaseModule {
  static forRoot(): DynamicModule {
    return TypeOrmModule.forRoot({
      type: (process.env['DATABASE_TYPE'] as 'mysql') ?? 'mysql',
      host: process.env['DATABASE_HOST'] ?? 'localhost',
      port: Number(process.env['DATABASE_PORT']) || 3306,
      username: process.env['DATABASE_USERNAME'],
      password: process.env['DATABASE_PASSWORD'],
      database: process.env['DATABASE_DATABASE'],
      entities: [User],
      synchronize: true,
    });
  }
}
