import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import {Role} from "./role.entity";

@Entity({name: `users`})
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({name: `second_name`, nullable: true})
	secondName: string;

	@Column({name: `first_name`, nullable: true})
	firstName: string;

	@Column({name: `last_name`, nullable: true})
	lastName: string;

	@ManyToOne(() => Role, role => role.user)
	@JoinColumn({name: `role_id`})
	role: Role;

	@CreateDateColumn({name: `created_at`})
	createdAt: Date;

	@UpdateDateColumn({name: `updated_at`})
	updatedAt: Date;
}
