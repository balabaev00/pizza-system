import {MigrationInterface, QueryRunner} from "typeorm";

export class createOtherEntities1658810956087 implements MigrationInterface {
	name = "createOtherEntities1658810956087";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "pizza_dough_types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_99ba03c10f5185ca6e2830ed391" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "pizza_info" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_4c47778c7a52c77dd6bac4e3759" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "pizza_sizes" ("id" SERIAL NOT NULL, "size" integer NOT NULL, CONSTRAINT "PK_5ed477cac0e2fd901a44fdaf7f8" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "pizzas" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "pizza_size_id" integer, "pizza_info_id" integer, "pizza_dough_type_id" integer, CONSTRAINT "PK_27f7ede7b9304d8372a336d1e5d" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "products_and_pizzas" ("id" SERIAL NOT NULL, "grams" integer NOT NULL, CONSTRAINT "PK_2fddfe9f03e85d5f6da72674e4b" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "order_types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_19e3baf00c52abb66887304f719" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "pizzas_and_categories" ("pizzasId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_5a90c9642ad9b41f7a010324e38" PRIMARY KEY ("pizzasId", "categoryId"))`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_13bdeccec86cd25332f3e1cc5f" ON "pizzas_and_categories" ("pizzasId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0f9b353b50a81ef6ed029588a5" ON "pizzas_and_categories" ("categoryId") `
		);
		await queryRunner.query(
			`ALTER TABLE "pizzas" ADD CONSTRAINT "FK_a1bff8cec17a33bae9d757aa8a5" FOREIGN KEY ("pizza_size_id") REFERENCES "pizza_sizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE "pizzas" ADD CONSTRAINT "FK_059eb3505e3950a66d11c48b611" FOREIGN KEY ("pizza_info_id") REFERENCES "pizza_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE "pizzas" ADD CONSTRAINT "FK_52b9e55872cc71ba19b10792fa3" FOREIGN KEY ("pizza_dough_type_id") REFERENCES "pizza_dough_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE "pizzas_and_categories" ADD CONSTRAINT "FK_13bdeccec86cd25332f3e1cc5f3" FOREIGN KEY ("pizzasId") REFERENCES "pizzas"("id") ON DELETE CASCADE ON UPDATE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE "pizzas_and_categories" ADD CONSTRAINT "FK_0f9b353b50a81ef6ed029588a58" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "pizzas_and_categories" DROP CONSTRAINT "FK_0f9b353b50a81ef6ed029588a58"`
		);
		await queryRunner.query(
			`ALTER TABLE "pizzas_and_categories" DROP CONSTRAINT "FK_13bdeccec86cd25332f3e1cc5f3"`
		);
		await queryRunner.query(
			`ALTER TABLE "pizzas" DROP CONSTRAINT "FK_52b9e55872cc71ba19b10792fa3"`
		);
		await queryRunner.query(
			`ALTER TABLE "pizzas" DROP CONSTRAINT "FK_059eb3505e3950a66d11c48b611"`
		);
		await queryRunner.query(
			`ALTER TABLE "pizzas" DROP CONSTRAINT "FK_a1bff8cec17a33bae9d757aa8a5"`
		);
		await queryRunner.query(`DROP INDEX "public"."IDX_0f9b353b50a81ef6ed029588a5"`);
		await queryRunner.query(`DROP INDEX "public"."IDX_13bdeccec86cd25332f3e1cc5f"`);
		await queryRunner.query(`DROP TABLE "pizzas_and_categories"`);
		await queryRunner.query(`DROP TABLE "order_types"`);
		await queryRunner.query(`DROP TABLE "products_and_pizzas"`);
		await queryRunner.query(`DROP TABLE "category"`);
		await queryRunner.query(`DROP TABLE "pizzas"`);
		await queryRunner.query(`DROP TABLE "pizza_sizes"`);
		await queryRunner.query(`DROP TABLE "pizza_info"`);
		await queryRunner.query(`DROP TABLE "pizza_dough_types"`);
	}
}
