import GamesService, { SearchResult } from '@/services/gamesService';
import { celebrate, Joi } from 'celebrate';
import { NextFunction, Request, Response, Router } from 'express';
import Container from 'typedi';
import { Logger } from 'winston';

const router = Router();

export default (app: Router) => {
	app.use('/games', router);

	router.get(
		'/',
		celebrate({
			query: Joi.object({
				search: Joi.string(),
				page: Joi.number().min(1),
				page_size: Joi.number().min(1).max(20),
			}),
		}),
		async (req: Request, res: Response, next: NextFunction) => {
			const logger: Logger = Container.get('logger');
			logger.debug('/games endpoint called with params: %o', req.query);
			try {
				const gamesService = Container.get(GamesService);
				const result: SearchResult[] = await gamesService.search(req.query);
				return res.status(200).json(result).end();
			} catch (e) {
				logger.error('Error: %o', e);
				return next(e);
			}
		},
	);
};
