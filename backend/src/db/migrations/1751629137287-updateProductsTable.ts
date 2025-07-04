import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductsTable1751629137287 implements MigrationInterface {
    name = 'UpdateProductsTable1751629137287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "tags"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "tags" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "tags"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "tags" character varying(30) array`);
    }

}
