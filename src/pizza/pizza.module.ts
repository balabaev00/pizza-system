import {PizzaSize} from "./entity/pizzaSize.entity";
import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Pizza} from "./entity/pizza.entity";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Pizza, PizzaSize])],
	providers: [],
	controllers: [],
	exports: [],
})
export class PizzaModule {}
