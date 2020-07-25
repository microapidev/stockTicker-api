const express = require('express');
const adminRoutes = require('../../controllers/admin');
const companyRoutes = require('../../controllers/company');

const router = express.Router();

router.use('/admin', adminRoutes);
router.use('/company', companyRoutes);

module.exports = router;
