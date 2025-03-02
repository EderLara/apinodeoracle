'use strict';

import condb from '../../services/condb/condb.js';

const connection = await oracledb.getConnection();

const peticion = async (req, res) => {
    try {
        const connection = await condb.getConnection();
        const result = await connection.execute('SELECT * FROM TABLE');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
}

// Endpoint para conectarse a un webservice y poner información allí
app.post('/api/webservice', async (req, res) => {
    const { data } = req.body;
    const username = process.env.WEBSERVICE_USER;       // Obtenemos el usuario del archivo .env
    const password = process.env.WEBSERVICE_PASSWORD;   // Obtenemos la contraseña del archivo .env
    
    try {
        const response = await axios.post('https://example.com/webservice', { data }, {
            auth: {
                username: username,
                password: password
            }
        });
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Webservice error' });
    }
});


process.on('SIGINT', async () => {
    console.log('Cerrando conexión ...');
    await db.close();
    process.exit(0);
});

export default peticion;