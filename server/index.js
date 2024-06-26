import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyparser from 'body-parser';

import Connection from './database/db.js';
import Router from './routes/routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyparser.json({extended: true}))
app.use(bodyparser.urlencoded({extended: true}))
app.use('/', Router);



const PORT = 8000;

app.listen(PORT, () => console.log(`server is running successfully on PORT hello mandar ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);