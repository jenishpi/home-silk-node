import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import router from './router';
const { MongoClient } = require('mongodb');

const app = express();

app.use(cors({
  credentials: true,
}));
require('dotenv').config();
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on ${process.env.PORT || 8080}`);
});
require("./db/conn")

app.use('/', router());
