import {OrderType} from "./../order/entity/orderType.entity";
import {Module} from "@nestjs/common";
import {UserModule} from "./../user/user.module";

@Module({
	imports: [UserModule, OrderType],
	controllers: [],
	providers: [],
})
export class AppModule {}
