const mongoose = require('mongoose');

const {
  Types: { ObjectId }
} = mongoose;

const mongoIdSchema = {
  //Helper to check if an ID is an object ID
  isObjectId: (id, helper) => {
    if (id instanceof ObjectId) return true;
    return helper.message('Id is not an ObjectId');
  },

  //Helper to validate a string as object ID
  isValidObjectId: (str, helper) => {
    if (typeof str !== 'string') {
      return helper.message('Id must be of type: String');
    }
    if (str.match(/^[a-f\d]{24}$/i)) return true;
    return helper.message('Id is not valid');
  }
};

module.exports = { mongoIdSchema };
