import {registerAs} from "@nestjs/config";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require(`dotenv`).config();

const env = process.env;

export default registerAs(`app`, () => ({
	postgres: {
		host: env.POSTGRES_HOST,
		port: parseInt(env.POSTGRES_PORT),
		database: env.POSTGRES_DATABASE,
		account: {
			login: env.POSTGRES_LOGIN,
			password: env.POSTGRES_PASSWORD,
		},
		synchronize: JSON.parse(env.POSTGRES_SYNC),
		logging: JSON.parse(env.POSTGRES_LOGGING),
	},
}));
