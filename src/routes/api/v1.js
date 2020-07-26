const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('../../swagger/openApiDocumentation');

const adminRoutes = require('../../controllers/admin');
const companyRoutes = require('../../controllers/company');

router.use('/admin', adminRoutes);
router.use('/company', companyRoutes);
router.use(['/', 'doc', 'docs', 'documentation'], swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

module.exports = router;
