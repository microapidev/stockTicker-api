const { company } = require('../services/company');
const { genericLevelAPIAuthorization } = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.use(genericLevelAPIAuthorization);

router.get('/:symbol/profile', company.getProfile);

router.get('/:symbol/metric', company.getFinancialMetric);

router.get('/:symbol/stock', company.getStockQuote);

module.exports = router;
