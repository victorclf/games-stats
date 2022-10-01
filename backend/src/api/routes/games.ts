import { Request, Response, Router } from 'express';

const router = Router();

export default (app: Router) => {
	app.use('/games', router);

	router.get(
		'/',
		async (req: Request, res: Response) => {
			res.status(200).end();
		},
	);
};
