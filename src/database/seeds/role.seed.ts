import configuration from "../../configuration/configuration";
import {Role} from "../../user/entity/role.entity";
import {User} from "../../user/entity/user.entity";
import {Connection, createConnection} from "typeorm";

const config = configuration();
const roles = [
	{name: `Администратор`},
	{name: `Оператор`},
	{name: `Менеджер`},
	{name: `Курьер`},
];

/**
 * It adds a tool to the database if it doesn't exist, or updates it if it does
 * @param t - { name: string }
 * @param {Connection} connection - The connection to the database.
 */
async function addInDatabase(t: {name: string}, connection: Connection) {
	const role = new Role();
	role.name = t.name;
	const rep = connection.getRepository(Role);
	const _t = await rep.findOne({name: role.name});
	if (!_t) await rep.save(role);
	else console.log(`Role "${role.name}" already exist`);
}

console.log(`[role.seed.ts] Start`);
const time = Date.now();

createConnection({
	type: `postgres`,
	host: config.postgres.host,
	port: config.postgres.port,
	username: config.postgres.account.login,
	password: config.postgres.account.password,
	database: config.postgres.database,
	entities: [Role, User],
	synchronize: config.postgres.synchronize,
})
	.then(async connection => {
		for (const role of roles) await addInDatabase(role, connection);
		console.log(
			`[role.seed.ts] Success (${Math.round((Date.now() - time) / 1000)}s)`
		);
	})
	.catch(error => console.log(`[role.seed.ts] Error: ${error}`));
