import {Pizza} from "./../../pizza/entity/pizza.entity";
import {Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Category {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@ManyToMany(() => Pizza, pizza => pizza.categories)
	@JoinColumn({name: `pizza_id`})
	pizzas: Pizza[];
}
