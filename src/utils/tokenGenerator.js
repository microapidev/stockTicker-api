import jwt from 'jsonwebtoken';
import mongoIdSchema from './validationTools/mongoIdSchema';
import CustomError from './customError';
import { ADMIN_SECRET } from '../config/util';

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
  if (!mongoIdSchema.isValidObjectId(adminId)) {
    throw new CustomError(400, 'Invalid admin ID');
  }

  return generateToken(
    {
      adminId
    },
    ADMIN_SECRET
  );
};

export { getAdminToken };
