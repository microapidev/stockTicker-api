import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const AdminSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true
    },
    applications: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Application'
      }
    ]
  },
  { timestamps: true }
);

AdminSchema.index(
  {
    email: 1
  },
  {
    unique: true
  }
);

AdminSchema.plugin(mongooseDelete, {
  overrideMethods: true,
  deletedAt: true,
  deletedBy: true
});

const Admin = mongoose.model('Admins', AdminSchema);
export { Admin };
