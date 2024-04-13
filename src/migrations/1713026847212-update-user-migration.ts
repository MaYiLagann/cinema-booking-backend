import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserMigration1713026847212 implements MigrationInterface {
    name = 'UpdateUserMigration1713026847212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\` (\`email\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_638bac731294171648258260ff\` ON \`user\` (\`password\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_638bac731294171648258260ff\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
    }

}
