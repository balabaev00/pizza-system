import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "./entity/product.entity";
import {ProductService} from "./product.service";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Product])],
	providers: [ProductService],
	controllers: [],
	exports: [],
})
export class ProductModule {}
