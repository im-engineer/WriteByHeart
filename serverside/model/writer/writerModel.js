import mongoose from "mongoose";

const writerSchema = mongoose.Schema({
    fullname : {type : String,require : true},
    username : {type : String,require : true},
    email : {type : String,require : true},
    password : {type : String,require : true},
    phoneNumber : {type : Number,require : true},
    dob :{type : Date,require : true}
})

export default mongoose.model("writer",writerSchema);