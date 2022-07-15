import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: `products`})
export class Product {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({nullable: true})
	description: string;

	@Column({nullable: true})
	price: number;

	@Column({nullable: true})
	image: string;
}
