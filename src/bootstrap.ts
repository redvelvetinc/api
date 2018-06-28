import * as path from 'path';
import * as dotenv from 'dotenv';
import { cpus } from 'os';
import * as throng from 'throng';
import { env } from 'process';
import App from './app.js';

const isProduction = env.NODE_ENV === 'PRODUCTION';

// Load the env variables
if (isProduction) {
  dotenv.config({ path: path.resolve(__dirname, '..', 'config', '.env.prod') });
} else {
  dotenv.config({ path: path.resolve(__dirname, '..', 'config', '.env.dev') });
}

const WORKERS = isProduction
  ? env.WEB_CONCURRENCY ||  cpus().length
  : 1;

const port = env.PORT || 3000;

throng(WORKERS, (id: any) => {
  console.log(`worker ${id} is now listening to http://localhost:${port}`);
  new App().start().listen(port)
    .on('listening', onListening)
    .on('error', onError);
});

// Event listener for HTTP server 'listening' event.
function onListening() {
  console.log(`Express server listening on ${port}, in ${env.NODE_ENV} mode`, );
}

// Event listener for HTTP server 'error' event.
function onError(error:any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
