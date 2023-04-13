import writerModel from "../../model/writer/writerModel";
const CryptoJS = require('crypto-js');

function generateKey() {
  // generate a random 256-bit key
  return CryptoJS.lib.WordArray.random(32);
}

function encryptData(data) {
  return CryptoJS.AES.encrypt(data, 'secretData').toString();
}
function decryptData(data) {
  var bytes = CryptoJS.AES.decrypt(data, 'secretData');
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText
}

export const writerRegistration = async (req, res) => {
  try {
    // generate a new key for each piece of data
    const key = generateKey();
    const writerDetails = new writerModel({
      fullname : encryptData(req.body.fullname, key),
      username : encryptData(req.body.username, key),
      email : encryptData(req.body.email, key),
      password : encryptData(req.body.password, key),
      phonenumber : encryptData(req.body.phonenumber, key),
      dob : encryptData(req.body.dob, key),
      gender : encryptData(req.body.gender, key),
      image: req.file.filename,
    });
    const writerData = await writerDetails.save();
    console.log("🚀 ~ file: writer.js:15 ~ writerRegistration ~ writerData:", writerData)
    if(writerData){
      res.send({
        status: true,
        message: "Registratione done successfully",
        result: writerData,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "Registration failed",
      error: error.message,
    });
  }
};
