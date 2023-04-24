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
  
  },
  password: { type: String, default: null, require: true },
  phoneNumber: {
    type: String,
    default: null,
    require: true,
    unique: true,
    // minlength: 10,
    // maxlength: 10,
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

const writer = new mongoose.model("writer",writerSchema);

module.exports = writer;