const jwt = require('express-jwt');
const { ADMIN_SECRET } = require('../config/util');

const genericLevelAPIAuthorization = jwt({
  secret: Buffer.from(ADMIN_SECRET, 'base64'),
  requestProperty: 'token',
  algorithms: ['HS256'],
  credentialsRequired: true
});

module.exports = { genericLevelAPIAuthorization };
