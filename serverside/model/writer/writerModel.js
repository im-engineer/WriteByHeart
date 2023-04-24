import mongoose from "mongoose";
import validator from "validator";

const writerSchema = mongoose.Schema({
  fullname: { type: String, default: null, require: true, trim: true },
  username: { type: String, default: null, require: true, trim: true },
  email: {
    type: String,
    default: null,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Error("not valid email");
      }
    },
  },
  password: { type: String, default: null, require: true },
  phoneNumber: {
    type: Number,
    default: null,
    require: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
  dob: { type: String, default: null, require: true },
  gender: {
    type: String,
    // enum: ["Male", "Female"],
    default: null,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  image: { type: String, default: null, require: true },
  datecreated:Date,
  dateUpdated:Date,
});

export default mongoose.model("writer", writerSchema);
