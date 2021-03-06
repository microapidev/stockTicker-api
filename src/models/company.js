const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompanySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    }
  },
  { timestamps: true }
);

CompanySchema.index(
  {
    name: 1
  },
  {
    unique: true
  }
);

const Company = mongoose.model('Company', CompanySchema);
module.exports = { Company };
