import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {User} from "./entity/user.entity";
import {Role} from "./entity/role.entity";

@Module({
	imports: [DatabaseModule, TypeOrmModule.forFeature([User, Role])],
	controllers: [UserController],
	providers: [UserService],
	exports: [],
})
export class UserModule {}
