import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Category} from "./entity/category.entity";
import {CategoryService} from "./category.service";
import {CategoryController} from "./category.controller";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Category])],
	controllers: [CategoryController],
	providers: [CategoryService],
	exports: [CategoryService],
})
export class CategoryModule {}
