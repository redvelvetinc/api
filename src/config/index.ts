import { env } from 'process';

export default {
  port: env.PORT ? parseInt(env.PORT, 10) : 3000,
  env: env.NODE_ENV ? env.NODE_ENV : 'development',
  isProduction: env.NODE_ENV === 'production',
  mongoUri: env.MONGODB_URI,
};
