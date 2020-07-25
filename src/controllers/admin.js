require('express-async-errors');
import express from 'express';
import { admin as AdminService } from '../services/admin';
import { addSingleAdmin, getSingleAdmin, getApiKey } from '../utils/validationTools/admin';
import { validateSchema } from '../middlewares/validation';

const router = express.Router();

router.post('/', validateSchema(addSingleAdmin), AdminService.addSingleAdmin);

router.get('/:adminId', validateSchema(getSingleAdmin), AdminService.getSingleAdmin);

router.get('/:adminId/key', validateSchema(getApiKey), AdminService.getApiKey);

export default router;
