import * as fs from 'node:fs/promises';
import config from '@/config';
import RAWGService from './rawgService';


const MOCK_DATA_SEARCH_JSON_PATH = 'src/services/mockdata_games.json';

export default class RAWGServiceMock extends RAWGService {
	public async search(search?: string, page = 1, page_size = 20) {
		const mockData = await fs.readFile(MOCK_DATA_SEARCH_JSON_PATH, config.encoding);
		const json = JSON.parse(mockData);
		return json;
	}
}
