const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('../../swagger/openApiDocumentation');

const adminRoutes = require('../../controllers/admin');
const companyRoutes = require('../../controllers/company');

router.use(['/', 'doc', 'docs', 'documentation'], swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
router.use('/admin', adminRoutes);
router.use('/company', companyRoutes);

module.exports = router;
