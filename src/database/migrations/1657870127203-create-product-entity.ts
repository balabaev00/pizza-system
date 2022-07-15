import {MigrationInterface, QueryRunner} from "typeorm";

export class createProductEntity1657870127203 implements MigrationInterface {
	name = "createProductEntity1657870127203";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, "price" integer, "image" character varying, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "products"`);
	}
}
