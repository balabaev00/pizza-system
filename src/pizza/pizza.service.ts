import {Repository} from "typeorm";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PizzaSize} from "./entity/pizzaSize.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {PizzaDough} from "./entity/pizzaDough.entity";

@Injectable()
export class PizzaService {
	constructor(
		@InjectRepository(PizzaSize)
		private readonly pizzaSizesRepository: Repository<PizzaSize>,
		@InjectRepository(PizzaDough)
		private readonly pizzaDoughTypesRepository: Repository<PizzaDough>
	) {}

	/**
	 * It returns a list of pizza sizes
	 * @returns An array of pizza sizes.
	 */
	async getPizzaSizes() {
		const pizzaSizes = await this.pizzaSizesRepository.find();

		return pizzaSizes;
	}

	/**
	 * It adds a new pizza size to the database
	 * @param {number} pizzaSize - number - the size of the pizza to be added
	 * @returns The new pizza size
	 */
	async savePizzaSize(pizzaSize: number) {
		const oldPizzaSize = await this.pizzaSizesRepository.findOne({size: pizzaSize});

		if (oldPizzaSize)
			throw new HttpException(
				`Pizza size ${pizzaSize} already exists`,
				HttpStatus.BAD_REQUEST
			);

		const newPizzaSize = new PizzaSize();
		newPizzaSize.size = pizzaSize;

		return await this.pizzaSizesRepository.save(newPizzaSize);
	}

	/**
	 * It returns a list of all the pizza dough types
	 * @returns An array of pizza dough types.
	 */
	async getPizzaDoughTypes() {
		const pizzaDoughTypes = await this.pizzaDoughTypesRepository.find();

		return pizzaDoughTypes;
	}

	async savePizzaDoughType(nameOfDoughType: string) {
		const oldDoughType = await this.pizzaDoughTypesRepository.findOne({
			name: nameOfDoughType,
		});

		if (oldDoughType)
			throw new HttpException(
				`Dough type ${nameOfDoughType} already exists`,
				HttpStatus.BAD_REQUEST
			);

		const newOldDoughType = new PizzaDough();
		newOldDoughType.name = nameOfDoughType;

		return await this.pizzaDoughTypesRepository.save(newOldDoughType);
	}
}
