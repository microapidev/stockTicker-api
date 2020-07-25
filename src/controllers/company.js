import { company } from '../services/company';
import { genericLevelAPIAuthorization } from '../middlewares/auth';
import express from 'express';
const router = express.Router();

router.use(genericLevelAPIAuthorization);

router.get('/:symbol/profile', company.getProfile);

router.get('/:symbol/metric', company.getFinancialMetric);

router.get('/:symbol/stock', company.getStockQuote);

export default router;
