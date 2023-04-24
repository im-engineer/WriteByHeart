import express from 'express'
import bodyParser from 'body-parser'
const app = express();

import cors from 'cors'
import {mongoconnection} from './db';
mongoconnection();
import writerRoute from "./routes/writerRoute/writerRoute"
import adminRoute from "./routes/adminRoute/adminRoute"
app.use(cors({origin:"*"}));

app.use(bodyParser.urlencoded(
    {
        extended:true
    }));
app.use(bodyParser.json());

app.use("/admin",adminRoute)
app.use("/writer",writerRoute)
app.use("/uploads",express.static("./uploads"));

export default app;