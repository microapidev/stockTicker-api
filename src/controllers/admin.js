require('express-async-errors');
const express = require('express');
const { admin: AdminService } = require('../services/admin');
const { addSingleAdmin, getSingleAdmin, getApiKey } = require('../utils/validationTools/admin');
const { validateSchema } = require('../middlewares/validation');

const router = express.Router();

router.post('/', validateSchema(addSingleAdmin), AdminService.addSingleAdmin);

router.get('/:adminId', validateSchema(getSingleAdmin), AdminService.getSingleAdmin);

router.get('/:adminId/key', validateSchema(getApiKey), AdminService.getApiKey);

module.exports = router;
