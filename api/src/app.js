'use strict';

// Import the express library
import express from 'express';
import cors from 'cors';
import router from '../routes/peticion/peticion.route';

const app = express();

app.use(cors());
app.use(express.json());
app.use (express.urlencoded({ extended : false }));
app.use(router);
// Define a route for the root of the API

export default app;