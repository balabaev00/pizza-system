import {Module} from "@nestjs/common";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				type: `postgres`,
				host: configService.get(`POSTGRES_HOST`),
				port: configService.get(`POSTGRES_PORT`),
				username: configService.get(`POSTGRES_LOGIN`),
				password: configService.get(`POSTGRES_PASSWORD`),
				database: configService.get(`POSTGRES_DATABASE`),
				entities: [__dirname + `/../**/*.entity{.ts,.js}`],
				synchronize: false,
				migrationsRun: true,
				logging: configService.get(`POSTGRES_LOGGING`),
				logger: `file`,
				migrations: [__dirname + `/database/migrations/**/*{.ts,.js}`],
				cli: {
					migrationsDir: `src/database/migrations`,
				},
			}),
			inject: [ConfigService],
		}),
	],
	exports: [TypeOrmModule],
})
export class DatabaseModule {}
