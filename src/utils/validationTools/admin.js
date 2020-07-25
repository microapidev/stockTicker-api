const Joi = require('@hapi/joi');
const { mongoIdSchema } = require('./mongoIdSchema');

/**
 * Schema validation for '/admin routes'
 */

const addSingleAdmin = {
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

const getSingleAdmin = {
  params: Joi.object().keys({
    adminId: Joi.custom(mongoIdSchema.isValidObjectId, 'mongo ObjectId').required()
  })
};

const getApiKey = {
  params: Joi.object().keys({
    adminId: Joi.custom(mongoIdSchema.isValidObjectId, 'mongo ObjectId').required()
  })
};

module.exports = { addSingleAdmin, getSingleAdmin, getApiKey };
