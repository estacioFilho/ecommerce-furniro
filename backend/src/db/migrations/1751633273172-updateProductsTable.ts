import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductsTable1751633273172 implements MigrationInterface {
    name = 'UpdateProductsTable1751633273172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "shareLink"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "shareLink" text array`);
        await queryRunner.query(`UPDATE "products" SET "shareLink" = ARRAY[]::text[] WHERE "shareLink" IS NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "shareLink" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "shareLink"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "shareLink" character varying NOT NULL`);
    }
}
