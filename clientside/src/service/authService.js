import axios from "axios";
import {getWriterInfo} from "../service/authHeader"
const TOKEN = getWriterInfo();
let axiosConfig = {
    headers:{
        'Content-Type' : 'application/json',
        'Authorization':TOKEN
    }
}
const API_URL = "http://localhost:5001/";

//-------------------------->>>>>> Writer Register <<<<<<--------------------------
export const writerRegistration = async (fromdata) => {
    console.log(fromdata)
    return await axios.post(API_URL + "writer/registration", fromdata, axiosConfig)

}


//-------------------------->>>>>> Writer Login <<<<<<--------------------------
export const writerAccess = async (email,password) => {
    console.log(email,password)
    try{
        const response =  await axios.post (API_URL + "writer/login",{
            email,
            password
                },axiosConfig)
                if(response.data.status ){
                    localStorage.setItem('users',JSON.stringify(response.data));
                    
                    return response   
                }else{
                    return response;
                }

    }catch(e){
            return null;
    }
}