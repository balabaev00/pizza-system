import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {City} from "./city.entity";

@Entity({name: `addresses`})
export class Address {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	street: string;

	@Column({nullable: true})
	entrance: number;

	@Column({nullable: true})
	floor: number;

	@Column({nullable: true})
	flat: number;

	@ManyToOne(() => City, city => city.addresses)
	@JoinColumn({name: `city_id`})
	city: City;
}
