import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: `order_type`})
export class OrderType {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
