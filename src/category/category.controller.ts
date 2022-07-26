import {Body, Controller, Get, HttpStatus, Post} from "@nestjs/common";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {CategoryService} from "./category.service";
import {
	CategoryDto,
	CreateCategoryReturn201,
	CreateCategoryReturn400,
	GetCategoriesReturn200,
} from "./dto/category.dto";

@ApiTags(`categories`)
@Controller(`categories`)
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Post(``)
	@ApiResponse({
		status: 201,
		description: `OK`,
		type: CreateCategoryReturn201,
	})
	@ApiResponse({
		status: 400,
		description: `Entity already exists`,
		type: CreateCategoryReturn400,
	})
	async create(@Body() dto: CategoryDto) {
		try {
			const res = await this.categoryService.create(dto.name);

			return {
				error: false,
				status: HttpStatus.CREATED,
				category: res,
			};
		} catch (error) {
			return {
				error: true,
				status: error.status,
				errorMessage: error.response,
			};
		}
	}

	@Get(``)
	@ApiResponse({
		status: 200,
		description: `OK`,
		type: GetCategoriesReturn200,
	})
	async findAll() {
		try {
			const res = await this.categoryService.findAll();

			return {
				error: false,
				status: HttpStatus.OK,
				categories: res,
			};
		} catch (error) {
			return {
				error: true,
				status: error.status,
				errorMessage: error.response,
			};
		}
	}
}
