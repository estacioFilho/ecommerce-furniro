import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1751461425603 implements MigrationInterface {
  name = 'Init1751461425603';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(30) NOT NULL, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."products_size_enum" AS ENUM('L', 'XL', 'XS')`,
    );
    await queryRunner.query(
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(30) NOT NULL, "price" numeric NOT NULL, "smallDescription" character varying(255) NOT NULL, "description" text NOT NULL, "subtitle" character varying(100), "sku" character varying(9) NOT NULL, "discount" numeric, "isNew" boolean NOT NULL DEFAULT true, "images" text array NOT NULL, "reviews" text array, "size" "public"."products_size_enum" NOT NULL, "colors" character varying(9) array NOT NULL, "tags" character varying(30) array, "shareLink" character varying, "categoryId" uuid, CONSTRAINT "UQ_c44ac33a05b144dd0d9ddcf9327" UNIQUE ("sku"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`,
    );
    await queryRunner.query(`DROP TABLE "products"`);
    await queryRunner.query(`DROP TYPE "public"."products_size_enum"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
}
