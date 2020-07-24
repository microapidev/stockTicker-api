import express from 'express';
import * as AdminSrv from '../services/admin';
import { addSingleAdmin, getSingleAdmin, getApiKey } from '../utils/validationTools/admin';
import { genericLevelAPIAuthorization } from '../middlewares/auth';
import { validateSchema } from '../middlewares/validation';

const router = express.Router();

router.use(genericLevelAPIAuthorization);

router.post('/', validateSchema(addSingleAdmin), AdminSrv.addSingleAdmin);

router.get('/:adminId', validateSchema(getSingleAdmin), AdminSrv.getSingleAdmin);

router.get('/key/:adminId', validateSchema(getApiKey), AdminSrv.getApiKey);

export default router;
