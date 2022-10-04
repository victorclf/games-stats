import { Inject, Service } from "typedi";
import RAWGService from "./rawgService";

export interface SearchResult {
	name: string;
	backgroundImage: string;
	releaseDate: string;
}

@Service()
export default class GamesService {
	@Inject()
	private rawgService: RAWGService;

	/**
	 * Search games.
	 * 
	 * @param {Object} query - query object
	 * @param {string} query.search - Search query.
	 * @param {number} query.page - A page number within the paginated result set.
	 * @param {number} query.page_size - Number of results to return per page.
	 * @returns {Promise<SearchResult[]} Promise with an array of search results
	 */
	async search({ search, page, page_size }: { search?: string, page?: number, page_size?: number }): Promise<SearchResult[]> {
		const { results } = await this.rawgService.getGames({ search, page, page_size });
		return results.map(({ name, background_image: backgroundImage, released: releaseDate }) => ({ name, backgroundImage, releaseDate }));
	}
}
