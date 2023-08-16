const express = require('express');
const EquiposControler = require('../controllers/EquiposControler');
const router = express.Router();


router.get('/equipos', EquiposControler.getEquipo);
router.post('/equipos', EquiposControler.agregarEquipo);
router.put('/equipos/:id', EquiposControler.actualizarEquipo);
router.delete('/equipos/:id', EquiposControler.eliminarEquipo);
router.get('/equipos/:id', EquiposControler.obtenerEquipoPorId);

module.exports = router;