import expressLoader from './express';
import Logger from './logger';

export default async ({ expressApp }) => {
	Logger.info('✌️ Dependency Injector loaded');

	await expressLoader({ app: expressApp });
	Logger.info('✌️ Express loaded');
};
