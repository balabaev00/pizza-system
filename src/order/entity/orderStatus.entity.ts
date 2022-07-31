import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: `order_statuses`})
export class OrderStatus {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
