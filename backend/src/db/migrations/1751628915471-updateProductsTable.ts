import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductsTable1751628915471 implements MigrationInterface {
    name = 'UpdateProductsTable1751628915471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "colors"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "colors" character varying array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "colors"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "colors" character varying(9) array NOT NULL`);
    }

}
