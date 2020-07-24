import express from 'express';
import adminRouteController from '../../controllers/admin';
import companyInfo from '../../controllers/company';

const router = express.Router();

router.use('/admin', adminRouteController);
router.use('/', companyInfo);

export default router;
