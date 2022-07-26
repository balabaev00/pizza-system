import {Category} from "./entity/category.entity";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(Category) private categoryRepository: Repository<Category>
	) {}

	/**
	 * It creates a new category if it doesn't already exist
	 * @param {string} categoryName - string - the name of the category we want to create
	 * @returns The new category object
	 */
	async create(categoryName: string) {
		const oldCategory = await this.findOneByName(categoryName);

		if (oldCategory)
			throw new HttpException(
				`Category with name <${categoryName}> already exists`,
				HttpStatus.BAD_REQUEST
			);

		const newCategory = new Category();

		newCategory.name = categoryName;

		return await this.categoryRepository.save(newCategory);
	}

	/**
	 * It finds a category by its name
	 * @param {string} categoryName - string - This is the name of the category that we want to find.
	 * @returns The category object
	 */
	async findOneByName(categoryName: string) {
		const category = await this.categoryRepository.findOne({name: categoryName});

		return category;
	}

	async findAll() {
		const categories = await this.categoryRepository.find();

		return categories;
	}
}
