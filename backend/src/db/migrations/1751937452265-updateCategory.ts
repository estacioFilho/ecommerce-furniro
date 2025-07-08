import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCategory1751937452265 implements MigrationInterface {
    name = 'UpdateCategory1751937452265'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "image" text NOT NULL 'default`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "image"`);
    }

}
