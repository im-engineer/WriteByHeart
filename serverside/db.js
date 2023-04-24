import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

var config = require('./config/config');

var configdata = config.get(process.env.Node_env).db;
import 'dotenv/config'
var mongoUrl = `mongodb://${configdata.host}:${configdata.port}/${configdata.databaseName}`;



export const mongoconnection = async() => {
    try{
        await mongoose.connect(mongoUrl);
        console.log("Connect to DB");
    }
    catch(e){
        console.log(e);
        throw e
}
}