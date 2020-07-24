import jwt from 'express-jwt';
import { ADMIN_SECRET } from '../config/util';

export const genericLevelAPIAuthorization = jwt({
  secret: Buffer.from(ADMIN_SECRET, 'base64'),
  requestProperty: 'token',
  algorithms: ['HS256']
});
