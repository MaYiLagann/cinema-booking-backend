import { DataSource, DataSourceOptions } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const dataSourceOptions: DataSourceOptions = {
  type: (process.env['DATABASE_TYPE'] ?? 'mysql') as 'mysql',
  host: process.env['DATABASE_HOST'] ?? 'localhost',
  port: Number(process.env['DATABASE_PORT']) || 3306,
  username: process.env['DATABASE_USERNAME'],
  password: process.env['DATABASE_PASSWORD'],
  database: process.env['DATABASE_DATABASE_NAME'],
  entities: ['src/entities/**.entity{.ts,.js}'],
  migrations: [],
  migrationsTableName: process.env['DATABASE_TABLE_MIGRATION'],
};
export const dataSource = new DataSource(dataSourceOptions);

void dataSource.initialize();
