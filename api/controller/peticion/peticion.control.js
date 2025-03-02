'use strict';

import condb from '../../services/condb/condb.js';

const peticion = async (req, res) => {
    try {
        const connection = await condb.getConnection();
        const result = await connection.execute('SELECT * FROM TABLE');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
    }
}

export default peticion;