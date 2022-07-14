import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {OrderType} from "./entity/orderType.entity";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([OrderType])],
	controllers: [],
	providers: [],
	exports: [],
})
export class OrderModule {}
