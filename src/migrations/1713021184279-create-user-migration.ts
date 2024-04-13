import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserMigration1713021184279 implements MigrationInterface {
  name = 'CreateUserMigration1713021184279';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE \`user\`
                             (
                                 \`id\`         int          NOT NULL AUTO_INCREMENT,
                                 \`email\`      varchar(255) NOT NULL,
                                 \`password\`   varchar(255) NOT NULL,
                                 \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                                 \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP (6),
                                 \`deleted_at\` timestamp(6) NULL,
                                 PRIMARY KEY (\`id\`)
                             ) ENGINE=InnoDB`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
