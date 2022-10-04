import config from '@/config';
import axios, { AxiosInstance } from 'axios';
import Container from 'typedi';
import { Logger } from 'winston';
import RAWGService from './rawgService';

export default class RAWGServiceImpl extends RAWGService {
	private readonly rawgApi: AxiosInstance;
	
	constructor() {
		super();
		this.rawgApi = axios.create({
			baseURL: config.rawgApi.prefix,
			timeout: config.rawgApi.timeout,
			params: {
				key: config.rawgApi.key,
			}
		})
	}

	public async getGames({ search, page = 1, page_size = 20}: { search?: string, page?: number, page_size?: number}) {
		const logger: Logger = Container.get('logger');

		// TODO Here we should check if the result for this query is present in an in-memory cache like Redis to avoid an external API call

		try {
			const response = await this.rawgApi.get('/games', {
				params: { 
					search,
					page,
					page_size
				}
			});

			logger.debug(`RAWG API: ${response.status} ${response.request.path}`);

			// TODO Here we should update the in-memory cache with the query result

			return response.data;
		} catch (e) {
			logger.error('Error on RAWG API call: %o', e);
			throw e;
		}
	}
}
