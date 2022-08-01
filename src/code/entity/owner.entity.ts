import {Code, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: `codes_owners`})
export class CodeOwner {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({name: `first_name`})
	firstName: string;

	@Column({name: `last_name`})
	lastName: string;

	@Column({name: `middle_name`, nullable: true})
	middleName?: string;

	@Column({name: `phone_number`, nullable: true, length: 30})
	phoneNumber?: string;

	@OneToMany(() => Code, code => code.owner)
	codes: Code[];
}
