import { Router } from 'express';

import mailing from './mailing';

const router = Router();
router.use('/mailing', mailing);

export default router;
