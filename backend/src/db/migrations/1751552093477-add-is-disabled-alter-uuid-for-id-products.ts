import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsDisabledAlterUuidForIdProducts1751552093477 implements MigrationInterface {
    name = 'AddIsDisabledAlterUuidForIdProducts1751552093477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "isDisabled" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "isDisabled"`);
    }

}
