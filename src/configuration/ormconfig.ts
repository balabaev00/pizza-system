import * as fs from "fs";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require(`dotenv`).config();

const env = process.env;
const conf = {
	type: `postgres`,
	host: env.POSTGRES_HOST,
	port: parseInt(env.POSTGRES_PORT),
	database: env.POSTGRES_DATABASE,
	username: env.POSTGRES_LOGIN,
	password: env.POSTGRES_PASSWORD,
	synchronize: JSON.parse(env.POSTGRES_SYNC),
	migrationsRun: JSON.parse(env.POSTGRES_MIGRATIONSRUN),
	logging: JSON.parse(env.POSTGRES_LOGGING),
	logger: env.POSTGRES_LOGGER,
	migrations: JSON.parse(env.POSTGRES_MIGRATIONS),
	entities: JSON.parse(env.POSTGRES_ENTITIES),
	cli: {
		migrationsDir: env.POSTGRES_CLI_MIGRATIONSDIR,
	},
};

const config = JSON.stringify(conf);
fs.writeFileSync(`${__dirname}/../../ormconfig.json`, config);
