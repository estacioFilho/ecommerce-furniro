import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRangeAndCategory1681001752176841017 implements MigrationInterface {
    name = 'CreateRangeAndCategory1681001752176841017'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "range" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "image" text, "isDisabled" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_f9dea38acbfb0f8f58527911041" UNIQUE ("name"), CONSTRAINT "PK_a0a1eb8dc140c99b397c8b1dbc1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(30) NOT NULL, "image" text, "isDisabled" boolean NOT NULL DEFAULT false, "rangeId" integer, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "price" numeric(10,2) NOT NULL, "smallDescription" character varying(255) NOT NULL, "description" text NOT NULL, "subtitle" character varying(50) NOT NULL, "sku" character varying(9) NOT NULL, "isNew" boolean NOT NULL DEFAULT false, "images" text array, "reviews" text NOT NULL, "size" text NOT NULL, "colors" text NOT NULL, "tags" text NOT NULL, "shareLink" text NOT NULL, "isDisabled" boolean NOT NULL DEFAULT false, "categoryId" integer, CONSTRAINT "UQ_34f6ca1cd897cc926bdcca1ca39" UNIQUE ("sku"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_5fc12611b3a5715ceb633a9314d" FOREIGN KEY ("rangeId") REFERENCES "range"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_5fc12611b3a5715ceb633a9314d"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "range"`);
    }

}
