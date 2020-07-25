const jwt = require('jsonwebtoken');
const { ADMIN_SECRET } = require('../config/util');

// token generator
const generateToken = (payload, secret, duration = '30d') => {
  const secretPhrase = Buffer.from(secret, 'base64');
  const token = jwt.sign(payload, secretPhrase, {
    expiresIn: duration,
    algorithm: 'HS256'
  });

  return token;
};

// adminToken generator
const getAdminToken = (adminId) => {
  return generateToken(
    {
      adminId
    },
    ADMIN_SECRET
  );
};

module.exports = { getAdminToken };
