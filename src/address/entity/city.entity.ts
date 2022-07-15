import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Address} from "./address.entity";

@Entity({name: `cities`})
export class City {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@OneToMany(() => Address, address => address.city)
	addresses: Address[];
}
