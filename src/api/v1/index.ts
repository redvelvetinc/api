import { Router, Request, Response, NextFunction } from 'express';
import Heroes from './heroes';
import Users from './users';

const router = Router();
router.use('/heroes', Heroes);
router.use('/users', Users);

export default router;
