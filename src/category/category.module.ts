import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Category} from "./entity/category.entity";
import {CategoryService} from "./category.service";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Category])],
	providers: [CategoryService],
	exports: [CategoryService],
})
export class CategoryModule {}
