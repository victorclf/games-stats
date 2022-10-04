export default abstract class RAWGService {
	abstract search(search?: string, page?: number, page_size?: number): Promise<any>;
}
