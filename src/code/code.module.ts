import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {CodeService} from "./code.service";

@Module({
	imports: [DatabaseModule],
	providers: [CodeService],
	controllers: [],
	exports: [CodeService],
})
export class CodeModule {}
