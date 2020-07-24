require('express-async-errors');
import express from 'express';
import * as AdminSrv from '../services/admin';
import { addSingleAdmin, getSingleAdmin, getApiKey } from '../utils/validationTools/admin';
import { validateSchema } from '../middlewares/validation';

const router = express.Router();

router.post('/', validateSchema(addSingleAdmin), AdminSrv.addSingleAdmin);

router.get('/:adminId', validateSchema(getSingleAdmin), AdminSrv.getSingleAdmin);

router.get('/:adminId/key', validateSchema(getApiKey), AdminSrv.getApiKey);

export default router;
