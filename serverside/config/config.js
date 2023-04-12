const config = {
    local : {
        db :{
            host : "localhost",
            port : "27017",
            databaseName : "siddhant",
            userName:"",
            password:""
        },
        api_port : 5001,
        client_secret_key:"thsgsjs"
    },
    staging:{
        db :{
            host :"172.10.1.3",
            port :"27017",
            databaseName :"siddhantsingh", 
            userName :"siddhantsingh",
            password :"siddhantsingh87"
        },
        EMAIL:{
            host:'smtp.gmail.com',
            port:465,
            username: 'azmsiddhant1@gmail.com',
            password: 'khghxqhczbsezjtd'  
        },api_port:9898
    }
}
export const get = function get(env){
    return config [env];
}
