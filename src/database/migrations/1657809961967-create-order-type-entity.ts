import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrderTypeEntity1657809961967 implements MigrationInterface {
	name = "createOrderTypeEntity1657809961967";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "order_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_0ff5747bd2cb60f2465351121f9" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`ALTER TABLE "users" ALTER COLUMN "second_name" DROP NOT NULL`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "users" ALTER COLUMN "second_name" SET NOT NULL`
		);
		await queryRunner.query(`DROP TABLE "order_type"`);
	}
}
