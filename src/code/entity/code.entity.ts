import {CodeOwner} from "./owner.entity";
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity(`codes`)
export class Code {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({name: `is_active`, default: true})
	isActive: boolean;

	@ManyToOne(() => CodeOwner, owner => owner.codes)
	@JoinColumn({name: `owner_id`})
	owner: CodeOwner;

	@CreateDateColumn({name: `created_at`})
	createdAt: Date;

	@UpdateDateColumn({name: `updated_at`})
	updatedAt: Date;
}
