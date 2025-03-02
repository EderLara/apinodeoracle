'use strict';
import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();
import oracledb from '../services/condb/condb.js';

const puerto = process.env.PORT || 3001;

try {
    app.listen(puerto, () => {
        await oracledb.initialize();
        console.log(`Server running on port ${puerto}`);
    });
} catch (error) {
    console.error(error);
}