import express from 'express';
import catchWrap from '@catchWrap';

import jokesController from '@controllers/jokes.controller';

const router = express.Router();

router.get('/random', catchWrap(jokesController.getRandom));
router.get('/category', catchWrap(jokesController.getCategory));
router.get('/free-text', catchWrap(jokesController.getFreeText));
export default router;

