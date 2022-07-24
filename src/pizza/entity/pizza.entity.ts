import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: `pizzas`})
export class Pizza {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	price: number;
}
