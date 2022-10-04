import RAWGService from '@/services/rawgService';
import RAWGServiceImpl from '@/services/rawgServiceImpl';
import { Container } from 'typedi';
import LoggerInstance from './logger';

export default () => {
	try {
		Container.set('logger', LoggerInstance);
		Container.set(RAWGService, new RAWGServiceImpl());

		return { };
	} catch (e) {
		LoggerInstance.error('Error on dependency injector loader: %o', e);
		throw e;
	}
};
