const { Admin } = require('../models/admin');
const CustomError = require('../utils/customError');
const CustomResponse = require('../utils/customResponse');
const { getAdminToken } = require('../utils/tokenGenerator');

const admin = {
  addSingleAdmin: async (request, response, next) => {
    //get arguments
    const { email } = request.body;

    let admin = await Admin.findOne({
      email: email
    });

    // check if admin exists
    if (admin) {
      throw new CustomError(401, 'Invalid email!');
    }

    //save new admin in db
    try {
      admin = new Admin({
        email: email
      });

      admin = await admin.save();
      admin = admin.toJSON();

      // generate api key
      const token = getAdminToken(admin.id);

      const data = {
        email: admin.email,
        id: admin.id,
        apiKey: token
      };

      return CustomResponse(response, 201, data, 'Account created successfully');
    } catch (error) {
      const errorType = error.code === 11000 ? ': admin account already exists' : '';

      next(new CustomError(400, 'An error occured creating admin account' + errorType));
    }
  },

  getSingleAdmin: async (request, response, next) => {
    //get adminId from params
    const { adminId } = request.params;

    //get admin account
    try {
      let admin = await Admin.findById(adminId);
      if (!admin) {
        next(new CustomError(404, 'Admin account not found'));
      }

      admin = admin.toJSON();

      return CustomResponse(response, 200, admin, 'Admin account retrieved successfully');
    } catch (error) {
      next(new CustomError(400, 'An error occured retrieving admin account'));
    }
  },

  getApiKey: async (request, response, next) => {
    const { adminId } = request.params;

    // check if admin exists
    let admin = await Admin.findById(adminId);
    if (!admin) {
      next(new CustomError(404, 'Admin account not found'));
    }

    try {
      const token = getAdminToken(adminId);
      return CustomResponse(response, 201, { apiKey: token }, 'Successfully generated token');
    } catch (error) {
      next(error);
    }
  }
};

module.exports = { admin };
