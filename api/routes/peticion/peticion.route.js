'use strict';

import express from 'express';
import peticion from '../../controller/peticion/peticion.control';

const router = express.Router();


router.get('/peticion', peticion);

export default router;
// Compare this snippet from api/routes/peticion/peticion.route.js: 