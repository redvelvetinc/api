import * as path from 'path';
import * as cluster from 'cluster';
import { config } from 'dotenv';
import { cpus } from 'os';
import { env } from 'process';
import App from './app.js';

// Load the env variables
if (env.NODE_ENV === 'PROD') {
  config({ path: path.resolve(__dirname, '..', 'config', '.env.prod') });
} else {
  config({ path: path.resolve(__dirname, '..', 'config', '.env.dev') });
}

// Enables cluster

const port = env.PORT || 3000;

if (cluster.isMaster) {
  const numCPUs = cpus().length;
  console.log(' Fork %s worker(s) from master', cpus.length)
  for (const cpu of cpus()) {
    cluster.fork()
  }
  cluster.on('online', (worker) => {
    console.log('Worker is running on %s pid', worker.process.pid)
  })
  cluster.on('exit', (worker, code, signal) => {
    console.log('Worker with %s died with code: s%, and signal: s%', worker.process.pid, code, signal);
  })
} else if (cluster.isWorker) {
  console.log(`worker (${cluster.worker.process.pid}) is now listening to http://localhost:${port}`)
  new App().start().listen(port)
    .on('listening', onListening)
    .on('error', onError);
}

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