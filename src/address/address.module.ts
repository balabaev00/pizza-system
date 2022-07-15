import {Address} from "./entity/address.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseModule} from "./../database/database.module";
import {Module} from "@nestjs/common";
import {City} from "./entity/city.entity";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([Address, City])],
	providers: [],
	controllers: [],
	exports: [],
})
export class AddressModule {}
