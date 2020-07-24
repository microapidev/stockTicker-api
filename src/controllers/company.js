import * as companyProfile from '../services/companyInfo';
import * as metrics from '../services/financialInfo';
import express from 'express';
const router = express.Router();
router.get('/companyProfile', companyProfile.getProfile);

router.get('/metric', metrics.getMetric);
module.exports = router;
