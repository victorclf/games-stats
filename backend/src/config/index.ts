import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Server port
   */
  port: parseInt(process.env.PORT ?? '3000', 10),

  /**
   * Winston logger config
   */
  logs: {
    level: process.env.LOG_LEVEL ?? 'silly',
  },

  /**
   * API url prefix
   */
  api: {
    prefix: '/api/v1',
  },

  /**
   * Default encoding. (added for use with fs.readFile)
   */
  encoding: (process.env.ENCODING ?? 'utf-8') as BufferEncoding,
};
