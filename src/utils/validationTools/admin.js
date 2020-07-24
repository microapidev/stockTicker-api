import Joi from '@hapi/joi';
import mongoIdSchema from '../mongoIdSchema';

/**
 * Schema validation for '/admin routes'
 */

export const addSingleAdmin = {
  headers: Joi.object({
    authorization: Joi.string().required()
  }),

  body: Joi.object().keys({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: true }
      })
      .trim()
      .required()
  })
};

export const getSingleAdmin = {
  headers: Joi.object({
    authorization: Joi.string().required()
  }),

  params: Joi.object().keys({
    adminId: Joi.custom(mongoIdSchema.isValidObjectId, 'mongo ObjectId').required()
  })
};

export const getApiKey = {
  params: Joi.object().keys({
    adminId: Joi.custom(mongoIdSchema.isValidObjectId, 'mongo ObjectId').required()
  })
};
