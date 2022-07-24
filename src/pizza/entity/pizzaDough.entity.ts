import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Pizza} from "./pizza.entity";

@Entity({name: `pizza_dough_types`})
export class PizzaDough {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@OneToMany(() => Pizza, pizza => pizza.pizzaDough)
	pizzas: Pizza;
}
