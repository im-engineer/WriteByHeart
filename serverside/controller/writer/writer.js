import writerModel from "../../model/writer/writerModel";
import bcrypt from "bcryptjs"

export const writerRegistration = async (req, res) => {
    try {
      const writerDetails = new writerModel({
        fullname : bcrypt.hashSync(req.body.fullname),
        username : bcrypt.hashSync(req.body.username),
        email : bcrypt.hashSync(req.body.email),
        password : bcrypt.hashSync(req.body.password),
        phonenumber : bcrypt.hashSync(req.body.phonenumber),
        fullname : bcrypt.hashSync(req.body.fullname)
      });
      const writerData = await writerDetails.save();
      console.log("🚀 ~ file: writer.js:15 ~ writerRegistration ~ writerData:", writerData)
    //   var emailDetails = await SendEmail(
    //     "azmsiddhant1@gmail.com",
    //     req.body.email,
    //     `Welcome `,
    //     `Users Details :
    //   email:${writerData.email},
    //   message:${writerData.textarea}`
    //   );
    //   console.log(writerData, "d");
    //   if(writerData){
    //   res.send({
    //     status: true,
    //     message: "message sent",
    //     result: writerData,
    //     data:emailDetails
    //   })};
    } catch (e) {
      res.send({
        status: false,
        message: "again u make a mistake",
        result: e,
      });
    }
  };