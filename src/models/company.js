import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CompanySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
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
export { Company };
