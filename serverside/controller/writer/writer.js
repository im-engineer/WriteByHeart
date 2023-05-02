import mongoose from "mongoose";
import writerModel from "../../model/writer/writerModel";
const CryptoJS = require("crypto-js");
// const io = require("socket.io");


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
    if (writerData) {
      // Emit a notification event to all connected clients
      // io.emit("notification", {
      //   title: "New Writer Joined",
      //   message: `Writer ${writerData.fullname} has joined`,
      // });

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

export const countWriter = async (req, res) => {
  try {
    // Get the total count of writer documents in the database
    const totalWriters = await writerModel.countDocuments();
    res.send({
      status: true,
      message: "Total writers count retrieved successfully",
      totalWriters: totalWriters,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "Failed to retrieve writers count",
      // error: error.message,
    });
  }
};


// Route handler for counting active and inactive writers
export const countActiveInactiveWriters = async (req, res) => {
  try {
    // Count active writers
    const activeWritersCount = await writerModel.countDocuments({ status: 'Active' });

    // Count inactive writers
    const inactiveWritersCount = await writerModel.countDocuments({ status: 'Inactive' });

    // Send the response
    res.send({
      status: true,
      activeWritersCount,
      inactiveWritersCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: 'Failed to count writers',
    });
  }
};


export const writerLogin = async (req, res) => {
  try {
    const email = req.body.email;
    console.log("🚀 ~ file: writer.js:115 ~ writerLogin ~ email:", email)
    const password = req.body.password;
    console.log("🚀 ~ file: writer.js:117 ~ writerLogin ~ password:", password)
    const writerData = await writerModel.findOne({});
    
    if (!writerData) {
      res.send({
        status: false,
        message: "No writer found",
      });
    } else {
      const Password = decryptData(writerData.password);
      console.log("🚀 ~ file: writer.js:130 ~ writerLogin ~ Password:", Password)
      const Email = decryptData(writerData.email);
      console.log("🚀 ~ file: writer.js:132 ~ writerLogin ~ Email:", Email)
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
    const decryptedData = writers.map(writer => ({
      "_id": writer._id,
      "fullname" : decryptData(writer.fullname),
      "username" : decryptData(writer.username),
      "email" : decryptData(writer.email),
      "phoneNumber" : decryptData(writer.phoneNumber),
      "dob" : decryptData(writer.dob),
      "gender" : decryptData(writer.gender),
      "status":writer.status 
    }));
    console.log("🚀 ~ file: writer.js:161 ~ findWriters ~ decryptedData:", decryptedData)
    res.send({
      status: true,
      message: "List of writers",
      result: decryptedData,
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




// Create a new poetry
const createPoetry = async (req, res) => {
  try {
    const writer = await writerModel.findById(mongoose.Types.ObjectId(req.params.writerId));

    if (!writer) {
      return res.status(404).json({ error: "writerModel not found" });
    }

    const poetry = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      genre: req.body.genre,
      tags: req.body.tags,
      liked : req.body.liked,
      image: req.file.filename,
    };

    writer.poetry.push(poetry);
    await writer.save();

    return res.status(201).json({ message: "Poetry created successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Retrieve all poetry of a writer

const getAllPoetry = async (req, res) => {
  try {
    const writers = await writerModel.find({}); // Use the find() method to get all writers, and select only the poetry field
    const poetry = writers.flatMap(writer => writer.poetry); // Extract the poetry field from each writer document and flatten the resulting array

    if (!poetry || poetry.length === 0) {
      return res.status(404).json({ error: "Poetry not found" });
    }

    return res.status(200).json(poetry);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update a poetry
const updatePoetry = async (req, res) => {
  try {
    const writer = await writerModel.findById(req.params.writerId);

    if (!writer) {
      return res.status(404).json({ error: "writerModel not found" });
    }

    const poetry = writer.poetry.find(
      (poem) => poem._id.toString() === req.params.poetryId
    );

    if (!poetry) {
      return res.status(404).json({ error: "Poetry not found" });
    }

    poetry.title = req.body.title || poetry.title;
    poetry.content = req.body.content || poetry.content;
    poetry.author = req.body.author || poetry.author;
    poetry.genre = req.body.genre || poetry.genre;
    poetry.tags = req.body.tags || poetry.tags;

    await writer.save();

    return res.status(200).json({ message: "Poetry updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a poetry
const deletePoetry = async (req, res) => {
  try {
    const writer = await writerModel.findById(req.params.writerId);

    if (!writer) {
      return res.status(404).json({ error: "writerModel not found" });
    }

    writer.poetry.pull(req.params.poetryId);
    await writer.save();

    return res.status(200).json({ message: "Poetry deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { createPoetry, getAllPoetry, updatePoetry, deletePoetry };
