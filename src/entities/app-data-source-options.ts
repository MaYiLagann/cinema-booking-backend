import { DataSourceOptions } from 'typeorm';
import process from 'process';
import { User } from './user.entity';

export const AppDataSourceOptions: DataSourceOptions = {
  type: (process.env['DATABASE_TYPE'] as 'mysql') ?? 'mysql',
  host: process.env['DATABASE_HOST'] ?? 'localhost',
  port: Number(process.env['DATABASE_PORT']) || 3306,
  username: process.env['DATABASE_USERNAME'],
  password: process.env['DATABASE_PASSWORD'],
  database: process.env['DATABASE_DATABASE_NAME'],
  entities: [User],
  migrations: [],
  migrationsTableName: process.env['DATABASE_TABLE_MIGRATION'],
};
