import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";

@Module({
	imports: [DatabaseModule],
	providers: [],
	controllers: [],
	exports: [],
})
export class PizzaModule {}
