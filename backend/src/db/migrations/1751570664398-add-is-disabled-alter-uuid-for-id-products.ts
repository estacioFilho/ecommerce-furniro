import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsDisabledAlterUuidForIdProducts1751570664398 implements MigrationInterface {
    name = 'AddIsDisabledAlterUuidForIdProducts1751570664398'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "isNew" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "shareLink" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "shareLink" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "isNew" SET DEFAULT true`);
    }

}
