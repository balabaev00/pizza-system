import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Product} from "./entity/product.entity";

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(Product) private productRepository: Repository<Product>
	) {}

	/**
	 * We create a new product, set its name, and then check if the other properties are set. If they are, we set them
	 * @param product - Product.Create
	 * @returns The new product that was created.
	 */
	async create(product: Product.Create) {
		const newProduct = new Product();

		newProduct.name = product.name;

		if (product.description) newProduct.description = product.description;
		if (product.price) newProduct.price = product.price;
		if (product.image) newProduct.image = product.image;

		return await this.productRepository.save(newProduct);
	}

	/**
	 * We're updating a product by its id, and we're passing a partial product object
	 * @param {number} productId - number - the id of the product we want to update
	 * @param product - Partial<Product.Create>
	 * @returns The updated product
	 */
	async update(productId: number, product: Partial<Product.Create>) {
		const oldProduct = await this.findOneById(productId);

		if (!oldProduct)
			throw new HttpException(`Product is not found`, HttpStatus.NOT_FOUND);

		Object.assign(oldProduct, product);

		return await this.productRepository.save(oldProduct);
	}

	/**
	 * It returns a product by its id
	 * @param {number} id - number - The id of the product we want to find.
	 * @returns The product with the id that was passed in.
	 */
	async findOneById(id: number) {
		const product = await this.productRepository.find({id: id});

		return product;
	}

	async getAll() {
		const products = await this.productRepository.find();

		return products;
	}
}
