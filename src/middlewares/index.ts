import { BodyParserMiddleware } from './BodyParserMiddleware';
import { CompressionMiddleware } from './CompressionMiddleware';
import { ErrorHandlerMiddleware } from './ErrorHandlerMiddleware';
import { LogMiddleware } from './LogMiddleware';
import { NotFoundHandlerMiddleware } from './NotFoundHandlerMiddleware';
import { SecurityHeadersMiddleware } from './SecurityHeadersMiddleware';

export default [
  BodyParserMiddleware,
  CompressionMiddleware,
  LogMiddleware,
  NotFoundHandlerMiddleware,
  ErrorHandlerMiddleware,
  SecurityHeadersMiddleware,
];
