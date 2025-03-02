   // myscript.js

import oracledb from 'oracledb';
import dotenv from 'dotenv';
dotenv.config();

const oracle = oracledb

oracle.outFormat = oracle.OUT_FORMAT_OBJECT;

async function run() {

    const connection = await oracle.getConnection ({
        user          : process.env.DB_USER,
        password      : process.env.DB_PASSWORD,
        connectString : process.env.DB_HOST
    }).then((connection) => {
        console.log('Connected to Oracle Database');
        return connection;
    }).catch((err) => {
        console.error(err);
    });

    // await connection.close();
}

run();

export default oracle;