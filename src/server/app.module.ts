import {AddressModule} from "./../address/address.module";
import {ProductModule} from "./../product/product.module";
import {OrderType} from "./../order/entity/orderType.entity";
import {Module} from "@nestjs/common";
import {UserModule} from "./../user/user.module";

@Module({
	imports: [UserModule, OrderType, ProductModule, AddressModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
