import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: `products_and_pizzas`})
export class ProductAndPizza {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	grams: number;
}
