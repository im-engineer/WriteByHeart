import axios from "axios";
import {getAdminInfo} from "../service/authHeader"
const TOKEN = getAdminInfo();
let axiosConfig = {
    headers:{
        'Content-Type' : 'application/json',
        'Authorization':TOKEN
    }
}
const API_URL = "http://localhost:5001/";


//-------------------------->>>>>> Admin Login <<<<<<--------------------------
export const adminAccess = async (email,password) => {
    console.log(email,password)
    try{
        const response =  await axios.post (API_URL + "admin/login",{
            email,
            password
                },axiosConfig)
                if(response.data.status ){
                    localStorage.setItem('admin',JSON.stringify(response.data));
                    
                    return response   
                }else{
                    return response;
                }

    }catch(e){
            return null;
    }
}