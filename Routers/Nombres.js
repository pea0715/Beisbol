const express = require('express');
const equiposControler = require('../controllers/NombreControler');

const router = express.Router();

router.get('/api/jugadores', equiposControler.obtenerTodosLosJugadores);
router.get('/api/jugadores/:id', equiposControler.obtenerJugadorPorId);
router.post('/api/jugadores', equiposControler.crearJugador);
router.put('/api/jugadores/:id', equiposControler.actualizarJugadorPorId);
router.delete('/api/jugadores/:id', equiposControler.eliminarJugadorPorId);

module.exports = router;