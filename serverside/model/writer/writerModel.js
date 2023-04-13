import mongoose from "mongoose";

const writerSchema = mongoose.Schema({
  fullname: { type: String, default: null, require: true },
  username: { type: String, default: null, require: true },
  email: { type: String, default: null, require: true },
  password: { type: String, default: null, require: true },
  phoneNumber: { type: Number, default: null, require: true },
  dob: { type: String, default: null, require: true },
  gender: {
    type: String,
    // enum: ["Male", "Female"],
    default: null,
    required: true,
  },
  image: { type: String, default: null, require: true },
  createdAt: { type: String, default: new Date().toISOString() },
});

export default mongoose.model("writer", writerSchema);
