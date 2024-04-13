import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entities/user.entity';

@Module({})
export class DatabaseModule {
  public static forRootAsync(): DynamicModule {
    return TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'mysql' | 'mariadb'>('database.type'),
        host: config.get<string>('database.host'),
        port: config.get<number>('database.port'),
        username: config.get<string>('database.username'),
        password: config.get<string>('database.password'),
        database: config.get<string>('database.database'),
        entities: [User],
        migrations: [],
        migrationsTableName: config.get<string>('database.migrationsTableName'),
      }),
      inject: [ConfigService],
    });
  }
}
