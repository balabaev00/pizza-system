import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "./entity/product.entity";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Product])],
	providers: [],
	controllers: [],
	exports: [],
})
export class ProductModule {}
