import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrderStatus1659239943529 implements MigrationInterface {
	name = "createOrderStatus1659239943529";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "order_statuses" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_76c6dc5bccb3ef1a4a8510cab3a" PRIMARY KEY ("id"))`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "order_statuses"`);
	}
}
