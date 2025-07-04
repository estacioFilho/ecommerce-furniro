import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductsTable1751630096089 implements MigrationInterface {
    name = 'UpdateProductsTable1751630096089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "shareLink"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "shareLink" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "shareLink"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "shareLink" character varying NOT NULL`);
    }

}
