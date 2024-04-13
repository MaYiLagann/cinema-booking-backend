export function Configuration() {
  return {
    app: {
      port: process.env['APP_PORT'] ?? 3000,
    },
    database: {
      type: process.env['DATABASE_TYPE'] ?? 'mysql',
      host: process.env['DATABASE_HOST'] ?? 'localhost',
      port: Number(process.env['DATABASE_PORT']) || 3306,
      username: process.env['DATABASE_USERNAME'],
      password: process.env['DATABASE_PASSWORD'],
      database: process.env['DATABASE_DATABASE_NAME'],
      migrationsTableName: process.env['DATABASE_TABLE_MIGRATION'],
    },
    user: {
      password_salt: process.env['USER_PASSWORD_SALT'],
    },
  };
}
