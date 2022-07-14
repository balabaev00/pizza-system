import {User} from "./../../user/entity/user.entity";
import {Role} from "./../../user/entity/role.entity";
import {OrderType} from "./../../order/entity/orderType.entity";
import configuration from "../../configuration/configuration";
import {Connection, createConnection} from "typeorm";

const config = configuration();
const orderTypes = [{name: `На вынос`}, {name: `Доставка`}];

/**
 * It adds a tool to the database if it doesn't exist, or updates it if it does
 * @param t - { name: string }
 * @param {Connection} connection - The connection to the database.
 */
async function addInDatabase(t: {name: string}, connection: Connection) {
	const orderType = new OrderType();
	orderType.name = t.name;
	const rep = connection.getRepository(OrderType);
	const _t = await rep.findOne({name: orderType.name});
	if (!_t) await rep.save(orderType);
	else console.log(`OrderType "${orderType.name}" already exist`);
}

console.log(`[orderType.seed.ts] Start`);
const time = Date.now();

createConnection({
	type: `postgres`,
	host: config.postgres.host,
	port: config.postgres.port,
	username: config.postgres.account.login,
	password: config.postgres.account.password,
	database: config.postgres.database,
	entities: [Role, User, OrderType],
	synchronize: config.postgres.synchronize,
})
	.then(async connection => {
		for (const orderType of orderTypes) await addInDatabase(orderType, connection);
		console.log(
			`[orderType.seed.ts] Success (${Math.round((Date.now() - time) / 1000)}s)`
		);
	})
	.catch(error => console.log(`[orderType.seed.ts] Error: ${error}`));
