import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCinemaTicketMigration1713075996526
  implements MigrationInterface
{
  name = 'UpdateCinemaTicketMigration1713075996526';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_a84b9e385a287fa15f428ed496\` ON \`cinema_ticket\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_81f1d49bc4f25ae1a76109fc5f\` ON \`cinema_ticket\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`cinema_ticket\` DROP COLUMN \`seat_id\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`cinema_ticket\` ADD \`seat_id\` int NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_81f1d49bc4f25ae1a76109fc5f\` ON \`cinema_ticket\` (\`seat_id\`)`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`IDX_a84b9e385a287fa15f428ed496\` ON \`cinema_ticket\` (\`cinema_id\`, \`seat_id\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_a84b9e385a287fa15f428ed496\` ON \`cinema_ticket\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_81f1d49bc4f25ae1a76109fc5f\` ON \`cinema_ticket\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`cinema_ticket\` DROP COLUMN \`seat_id\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`cinema_ticket\` ADD \`seat_id\` varchar(50) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_81f1d49bc4f25ae1a76109fc5f\` ON \`cinema_ticket\` (\`seat_id\`)`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`IDX_a84b9e385a287fa15f428ed496\` ON \`cinema_ticket\` (\`cinema_id\`, \`seat_id\`)`,
    );
  }
}
