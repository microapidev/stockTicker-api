import express from 'express';
import adminRouteController from '../../controllers/admin';

const router = express.Router();

router.use('/admin', adminRouteController);

export default router;
