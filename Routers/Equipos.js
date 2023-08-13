const express = require('express');
const equiposControler = require('../controllers/EquiposControler');
const router = express.Router();

router.get('/api/equipos', equiposControler.getEquipo);
router.get('/api/equipos/:id', equiposControler.obtenerEquipoPorId);
router.post('/api/equipos', equiposControler.agregarEquipo);
router.put('/api/equipos/:id', equiposControler.actualizarEquipo);
router.delete('/api/equipos/:id', equiposControler.eliminarEquipo);

module.exports = router;