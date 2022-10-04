export default abstract class RAWGService {
	/**
	 * RAWG API endpoint. Get a list of games.
	 * 
	 * @param {Object} query - query object
	 * @param {string} query.search - Search query.
	 * @param {number} query.page - A page number within the paginated result set.
	 * @param {number} query.page_size - Number of results to return per page.
	 * @return {Promise<any>} list of games
	 */
	abstract getGames({ search, page, page_size }: { search?: string, page?: number, page_size?: number }): Promise<any>;
}
