import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

const origin = {
  // origin: isProduction ? 'https://example.com' : '*',
  origin: '*',
};

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors(origin));
server.use(compression());
server.use(helmet());
server.use(morgan('combined'));

// server.use('/api/account', accountRoutes);
// server.use('/api/profile', profileRoutes);

server.use('/_healthcheck', (_req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
  });
});

export default server;
