import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCinemaTicket1713072670600 implements MigrationInterface {
  name = 'CreateCinemaTicket1713072670600';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE \`cinema_ticket\`
                             (
                                 \`id\`         int          NOT NULL AUTO_INCREMENT,
                                 \`cinema_id\`  int          NOT NULL,
                                 \`seat_id\`    varchar(255) NOT NULL,
                                 \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                                 \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP (6),
                                 \`deleted_at\` timestamp(6) NULL,
                                 \`user_id\`    int NULL,
                                 INDEX          \`IDX_7bcfe79d8b4753444271087249\` (\`cinema_id\`),
                                 INDEX          \`IDX_81f1d49bc4f25ae1a76109fc5f\` (\`seat_id\`),
                                 UNIQUE INDEX \`IDX_a84b9e385a287fa15f428ed496\` (\`cinema_id\`, \`seat_id\`),
                                 UNIQUE INDEX \`REL_69023a1dcb6ab24f153f7ab701\` (\`user_id\`),
                                 PRIMARY KEY (\`id\`)
                             ) ENGINE=InnoDB`);
    await queryRunner.query(`ALTER TABLE \`cinema_ticket\`
        ADD CONSTRAINT \`FK_69023a1dcb6ab24f153f7ab7015\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\` (\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`cinema_ticket\` DROP FOREIGN KEY \`FK_69023a1dcb6ab24f153f7ab7015\``,
    );
    await queryRunner.query(
      `DROP INDEX \`REL_69023a1dcb6ab24f153f7ab701\` ON \`cinema_ticket\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_a84b9e385a287fa15f428ed496\` ON \`cinema_ticket\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_81f1d49bc4f25ae1a76109fc5f\` ON \`cinema_ticket\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_7bcfe79d8b4753444271087249\` ON \`cinema_ticket\``,
    );
    await queryRunner.query(`DROP TABLE \`cinema_ticket\``);
  }
}
