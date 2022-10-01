import { Router } from 'express';
import games from './routes/games';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	games(app);

	return app
}
