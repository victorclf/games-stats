import { Service } from 'typedi';

@Service()
export default class RAWGService {
	constructor(
	) { }

	public async search() {
		return 'half-life 3';
	}
}
