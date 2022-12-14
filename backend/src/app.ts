import 'reflect-metadata';
import config from './config';
import express from 'express';
import Logger from './loaders/logger';

// Based on project structure template from https://softwareontheroad.com/ideal-nodejs-project-structure/

async function startServer() {
	const app = express();

	/**
	 * A little hack here
	 * Import/Export can only be used in 'top-level code'
	 * Well, at least in node 10 without babel and at the time of writing
	 * So we are using good old require.
	 **/
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	await require('./loaders').default({ expressApp: app });

	const server = app.listen(config.port, () => {
		Logger.info(`Server listening on port: ${config.port}`);
	}).on('error', err => {
		Logger.error(err);
		process.exit(1);
	});

	return { app, server };
}

export default startServer();
