import {MigrationInterface, QueryRunner} from "typeorm";

export class createCityAndAddressEntities1657870225044 implements MigrationInterface {
	name = "createCityAndAddressEntities1657870225044";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "cities" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "entrance" integer, "floor" integer, "flat" integer, "city_id" integer, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`ALTER TABLE "addresses" ADD CONSTRAINT "FK_baebeb388634106e4cbb46192b9" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "addresses" DROP CONSTRAINT "FK_baebeb388634106e4cbb46192b9"`
		);
		await queryRunner.query(`DROP TABLE "addresses"`);
		await queryRunner.query(`DROP TABLE "cities"`);
	}
}
