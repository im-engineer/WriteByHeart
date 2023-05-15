import admin from '../../model/admin/admin';
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

export const adminCreate = async (req, res) => {
  try {
    // generate a new key for each piece of data
    const key = generateKey();
    const adminDetails = new admin({
      fullname : encryptData(req.body.fullname, key),
      email : encryptData(req.body.email, key),
      password : encryptData(req.body.password, key),
      phonenumber : encryptData(req.body.phonenumber, key),
      dob : encryptData(req.body.dob, key),
      gender : encryptData(req.body.gender, key),
      image: req.file.filename,
    });
    const adminData = await adminDetails.save();
    console.log("🚀 ~ file: writer.js:15 ~ writerRegistration ~ adminData:", adminData)
    if(adminData){
      res.send({
        status: true,
        message: "Admin created successfully",
        result: adminData,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "Creation failed",
      error: error.message,
    });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const adminData = await admin.findOne({});
    if (!adminData) {
      res.send({
        status: false,
        message: "No writer found",
      });
    } else {
      const Password = decryptData(adminData.password)
      const Email = decryptData(adminData.email)
      if (email == Email && password == Password) {
        res.send({
          status: true,
          message: "Login successful",
          result: adminData,
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
