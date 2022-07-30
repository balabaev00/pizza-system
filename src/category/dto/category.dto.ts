import {ApiProperty} from "@nestjs/swagger";
import {IsDefined, IsNotEmpty, IsString} from "class-validator";
import {Category} from "../entity/category.entity";

export class CategoryDto {
	@IsNotEmpty()
	@IsDefined()
	@IsString()
	@ApiProperty({
		description: `Category name`,
		example: `Мясные`,
	})
	readonly name: string;
}

export class CreateCategoryReturn201 {
	@ApiProperty({
		description: `false - all good, true - check errorMessage`,
		example: false,
	})
	error: boolean;

	@ApiProperty({
		description: `Category entity`,
		example: {
			id: 1,
			name: `Мясные`,
		},
	})
	category: Category; // TODO Спросить как решить это

	@ApiProperty({
		description: `Status code`,
		example: `201`,
	})
	status: number;
}

export class CreateCategoryReturn400 {
	@ApiProperty({
		description: `false - all good, true - check errorMessage`,
		example: true,
	})
	error: boolean;

	@ApiProperty({
		description: `Description of error`,
		example: `Category with name <categoryName> already exists`,
	})
	errorMessage: string;

	@ApiProperty({
		description: `Status code`,
		example: `400`,
	})
	status: number;
}

export class GetCategoriesReturn200 {
	@ApiProperty({
		description: `false - all good, true - check errorMessage`,
		example: false,
	})
	error: boolean;

	@ApiProperty({
		description: `Array of categories`,
		example: [
			{
				id: 1,
				name: `Мясные`,
			},
			{
				id: 2,
				name: `Вегетарианские`,
			},
			{
				id: 3,
				name: `Без лука`,
			},
		],
	})
	categories: Category[];

	@ApiProperty({
		description: `Status code`,
		example: `200`,
	})
	status: number;
}
