import mongoose from "mongoose";
import validator from "validator";

const poetrySchema = mongoose.Schema({
  title: { type: String, required: false, trim: true },
  content: { type: String, required: false },
  author: { type: String, required: false },
  genre: { type: String, required: false },
  tags: [{ type: String }],
  liked : {type : Number, required : false},
  dateCreated: { type: Date, default: Date.now }
});

const writerSchema = mongoose.Schema({
  fullname: { type: String, default: null, require: true, trim: true },
  username: { type: String, default: null, require: true, trim: true },
  email: {
    type: String,
    default: null,
    require: true,
    unique: true
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
  datecreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date, default: Date.now },
  poetry: [poetrySchema] // Embedding the poetry schema as a subdocument array
});

const writer = mongoose.model("writer", writerSchema);

export default writer;
