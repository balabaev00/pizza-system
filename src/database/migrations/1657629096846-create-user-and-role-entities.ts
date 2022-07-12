import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserAndRoleEntities1657629096846 implements MigrationInterface {
	name = "createUserAndRoleEntities1657629096846";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "users" ("id" SERIAL NOT NULL, "second_name" character varying NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "role_id" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`
		);
		await queryRunner.query(
			`ALTER TABLE "users" ALTER COLUMN "first_name" DROP NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE "users" ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "users" DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`
		);
		await queryRunner.query(
			`ALTER TABLE "users" ALTER COLUMN "first_name" SET NOT NULL`
		);
		await queryRunner.query(`DROP TABLE "roles"`);
		await queryRunner.query(`DROP TABLE "users"`);
	}
}
