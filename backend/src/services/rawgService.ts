export default abstract class RAWGService {
	abstract getGames({ search, page, page_size}: { search?: string, page?: number, page_size?: number}): Promise<any>;
}
