'use strict';
import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();
import oracledb from 'oracledb';

try {
    if (oracle){
            app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    }
} catch (error) {
    console.error(error);
}