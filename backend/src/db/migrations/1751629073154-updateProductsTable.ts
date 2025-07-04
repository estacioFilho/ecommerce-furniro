import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductsTable1751629073154 implements MigrationInterface {
    name = 'UpdateProductsTable1751629073154'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "colors"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "colors" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "colors"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "colors" character varying array NOT NULL`);
    }

}
