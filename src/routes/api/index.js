const express = require('express');
const api = require('./v1');

const router = express.Router();

router.use('/v1', api);

module.exports = router;
