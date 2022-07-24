import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Pizza} from "./pizza.entity";

@Entity({name: `pizza_info`})
export class PizzaInfo {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({nullable: false})
	image: string;

	@Column({nullable: false})
	description: string;

	@OneToMany(() => Pizza, pizza => pizza.pizzaInfo)
	pizzas: Pizza[];
}
