import {Category} from "./../../category/entity/category.entity";
import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import {PizzaDough} from "./pizzaDough.entity";
import {PizzaInfo} from "./pizzaInfo.entity";
import {PizzaSize} from "./pizzaSize.entity";

@Entity({name: `pizzas`})
export class Pizza {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	price: number;

	@ManyToOne(() => PizzaSize, pizzaSize => pizzaSize.pizzas)
	@JoinColumn({name: `pizza_size_id`})
	pizzaSize: PizzaSize;

	@ManyToOne(() => PizzaInfo, pizzaInfo => pizzaInfo.pizzas)
	@JoinColumn({name: `pizza_info_id`})
	pizzaInfo: PizzaInfo;

	@ManyToOne(() => PizzaDough, pizzaDough => pizzaDough.pizzas)
	@JoinColumn({name: `pizza_dough_type_id`})
	pizzaDough: PizzaDough;

	@ManyToMany(() => Category, category => category.pizzas)
	@JoinColumn({name: `category_id`})
	@JoinTable({name: `pizzas_and_categories`})
	categories: Category[];
}
