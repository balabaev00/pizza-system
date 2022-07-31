import {ApiProperty} from "@nestjs/swagger";

class PizzaSizeDto {
	@ApiProperty({
		name: `Pizza size id`,
		type: Number,
	})
	id: number;

	@ApiProperty({
		name: `Pizza size`,
		type: Number,
	})
	size: number;
}

class PizzaDoughDto {
	@ApiProperty({
		name: `Pizza dough id`,
		type: Number,
	})
	id: number;

	@ApiProperty({
		name: `Pizza dough type`,
		type: String,
	})
	name: string;
}
