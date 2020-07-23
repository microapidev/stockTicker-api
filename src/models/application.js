import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const ApplicationSchema = new Schema(
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

ApplicationSchema.index(
  {
    name: 1
  },
  {
    unique: true
  }
);

ApplicationSchema.plugin(mongooseDelete, {
  overrideMethods: true,
  deletedAt: true,
  deletedBy: true
});

const Application = mongoose.model('Applications', ApplicationSchema);
export { Application };
