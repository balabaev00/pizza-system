import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Pizza} from "./pizza.entity";

@Entity({name: `pizza_sizes`})
export class PizzaSize {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	size: number;

	@OneToMany(() => Pizza, pizza => pizza.pizzaSize)
	pizzas: Pizza[];
}
