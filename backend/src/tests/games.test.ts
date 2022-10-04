import startServerPromise from '../app';
import { should } from 'chai';
import config from '@/config';
import supertest from 'supertest';

// Setup should statements from chai
should();

// Setup supertest and start server
let app: any;
let server: any;
let request: supertest.SuperTest<supertest.Test>;
beforeAll(async () => {
	const p = (await startServerPromise); // destructuring assignment does not work here?
	app = p.app;
	server = p.server;
	request = supertest(app);
})
afterAll(async () => {
	await server.close();
})

describe('GET /games', () => {
	it('WHEN called with no params THEN return list of games from Rawg', async () => {
		const res = await request.get(`${config.api.prefix}/games`);
		res.status.should.equal(200);
		res.body.count.should.equal(804157);
		res.body.results.should.have.lengthOf(20);
		res.body.results[0].name.should.equal("Grand Theft Auto V");
	});
});
