import express from 'express'
import bodyParser from 'body-parser'
const app = express();

// import cors from 'cors'
import {mongoconnection} from './db';
mongoconnection();
// import contactRoute from "./router/contactRoute"
// app.use(cors({origin:"*"}));

app.use(bodyParser.urlencoded(
    {
        extended:true
    }));
app.use(bodyParser.json());


// app.use("/contact",contactRoute)


export default app;