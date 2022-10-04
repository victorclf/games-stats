import * as fs from 'node:fs/promises';
import config from '@/config';
import RAWGService from './rawgService';


const MOCK_DATA_SEARCH_JSON_PATH = 'src/services/mockdata_games.json';

export default class RAWGServiceMock extends RAWGService {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async getGames({ search, page, page_size}: { search?: string, page?: number, page_size?: number}) {
		const mockData = await fs.readFile(MOCK_DATA_SEARCH_JSON_PATH, config.encoding);
		const json = JSON.parse(mockData);
		return json;
	}
}
