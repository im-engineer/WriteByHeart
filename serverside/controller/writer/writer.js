import writerModel from "../../model/writer/writerModel";
const CryptoJS = require("crypto-js");

function generateKey() {
  // generate a random 256-bit key
  return CryptoJS.lib.WordArray.random(32);
}

function encryptData(data) {
  return CryptoJS.AES.encrypt(data, "secretData").toString();
}
function decryptData(data) {
  var bytes = CryptoJS.AES.decrypt(data, "secretData");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

export const writerJoined = async (req, res) => {
  try {
    // Check if email already exists in the database
    const email = req.body.email;
    const existingWriter = await writerModel.find({});
    const foundWriter = existingWriter.find((writer) => writer.email);
    const decryptemail = decryptData(foundWriter.email);
    if (email == decryptemail) {
      return res.status(400).send({
        status: false,
        message: "Email already exists in the database",
      });
    }

    // generate a new key for each piece of data
    const key = generateKey();
    const writerDetails = new writerModel({
      fullname: encryptData(req.body.fullname, key),
      username: encryptData(req.body.username, key),
      email: encryptData(req.body.email, key),
      password: encryptData(req.body.password, key),
      phoneNumber: encryptData(req.body.phoneNumber, key),
      dob: encryptData(req.body.dob, key),
      gender: encryptData(req.body.gender, key),
      status: req.body.status,
      image: req.file.filename,
    });
    const writerData = await writerDetails.save();
    console.log(
      "🚀 ~ file: writer.js:15 ~ writerRegistration ~ writerData:",
      writerData
    );
    if (writerData) {
      res.send({
        status: true,
        message: "Registration done successfully",
        result: writerData,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "Registration failed",
      // error: error.message,
    });
  }
};

export const writerLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const writerData = await writerModel.findOne({});
    console.log(
      "🚀 ~ file: writer.js:33 ~ writerLogin ~ writerData",
      writerData
    );
    if (!writerData) {
      res.send({
        status: false,
        message: "No writer found",
      });
    } else {
      const Password = decryptData(writerData.password);
      const Email = decryptData(writerData.email);
      if (email == Email && password == Password) {
        res.send({
          status: true,
          message: "Login successful",
          result: writerData,
        });
      } else {
        res.send({
          status: false,
          message: "Invalid credentials",
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "Login failed",
      error: error.message,
    });
  }
};

export const findWriters = async (req, res) => {
  try {
    const writers = await writerModel.find({});
    res.send({
      status: true,
      message: "List of writers",
      result: writers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "Failed to retrieve writers",
      error: error.message,
    });
  }
};
