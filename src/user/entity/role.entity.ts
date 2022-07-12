import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.entity";

@Entity(`roles`)
export class Role {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: false})
	name: string;

	@OneToMany(() => User, user => user.role)
	user: User;
}
