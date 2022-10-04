import startServerPromise from '../app';
import { should } from 'chai';
import config from '@/config';
import supertest from 'supertest';
import Container from 'typedi';
import RAWGServiceMock from '@/services/rawgServiceMock';
import RAWGService from '@/services/rawgService';

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

// Use mock of RAWGService
beforeAll(() => {
	Container.set(RAWGService, new RAWGServiceMock());
})

describe('GET /games', () => {
	it('WHEN called with no params THEN return list of games from Rawg', async () => {
		const res = await request.get(`${config.api.prefix}/games`);
		res.status.should.equal(200);
		res.body.should.have.lengthOf(20);
		res.body[0].name.should.equal("Grand Theft Auto V");
		res.body[0].releaseDate.should.equal("2013-09-17")
		res.body[0].backgroundImage.should.equal("https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg");
	});
});
