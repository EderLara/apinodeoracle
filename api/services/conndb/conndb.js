   // myscript.js

import oracledb from 'oracledb';
import dotenv from 'dotenv';
dotenv.config();

const oracle = oracledb

oracle.outFormat = oracle.OUT_FORMAT_OBJECT;

async function initialize() {
    try {
        await oracledb.createPool({
            user: process.env.ORACLE_USER,
            password: process.env.ORACLE_PASSWORD,
            connectString: process.env.ORACLE_CONNECT_STRING,
        });
        console.log('Connection pool iniciado');
    } catch (err) {
        console.error('Error al iniciar connection pool', err);
        process.exit(1);
    }
}

async function close() {
    try {
        await oracledb.getPool().close(10);
        console.log('Connection pool closed');
    } catch (err) {
        console.error('Error closing connection pool', err);
    }
}

export {initialize, close}