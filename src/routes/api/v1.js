const router = require('express').Router();

const adminRoutes = require('../../controllers/admin');
const companyRoutes = require('../../controllers/company');
const docRoutes = require('../../controllers/documentation');


router.use(['/', 'doc', 'docs', 'documentation'], docRoutes);
router.use('/admin', adminRoutes);
router.use('/company', companyRoutes);

module.exports = router;
