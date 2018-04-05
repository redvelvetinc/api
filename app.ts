import * as express from 'express';
import * as http from 'http';

import expressConfig from './config/express';
import routesConfig from './src/routes';

async function startApi(): Promise<express.Application> {
  // Setup server
  const app: express.Application = express();
  const server = http.createServer(app);
  const port = process.env.PORT || 3000;

  expressConfig(app);
  routesConfig(app);

  try {
    await server.listen(port);
    console.log('Express server listening on %d, in %s mode', port, app.get('env'));
  } catch(err) {
    console.error(err.stack);
  }

  return app;
};

// Expose app
export default startApi;