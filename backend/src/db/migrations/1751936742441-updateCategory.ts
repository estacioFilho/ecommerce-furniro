import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCategory1751936742441 implements MigrationInterface {
    name = 'UpdateCategory1751936742441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "image" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "image"`);
    }

}
