import mongoose from "mongoose";
import dotenv from 'dotenv'
import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url';
import viewRoutes from "./routes/viewRoutes.js";
dotenv.config()

mongoose.connect('mongodb://localhost:27017/databaseName')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.SERVER_PORT || 4000
const HOST = process.env.SERVER_HOST || "localhost"
const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', viewRoutes)

app.listen(PORT, () =>{
    console.log(`Server started running on http://${HOST}:${PORT}`)
})

export default app

