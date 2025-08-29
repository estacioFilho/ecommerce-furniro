import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDiscountAndPriceWithDiscount1756471821973 implements MigrationInterface {
    name = 'AddDiscountAndPriceWithDiscount1756471821973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "priceWithDiscount" numeric(10,2) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "product" ADD "discount" numeric(5,2) NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "priceWithDiscount"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "image" text`);
    }

}
