import express from 'express';
import adminRoutes from '../../controllers/admin';
import companyRoutes from '../../controllers/company';

const router = express.Router();

router.use('/admin', adminRoutes);
router.use('/company', companyRoutes);

export default router;
