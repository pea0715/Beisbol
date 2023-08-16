const express = require('express');
const Jugadorcontroler = require('../controllers/NombreControler');
const router = express.Router();

router.get('/jugadores', Jugadorcontroler.getJugadores);
router.get('/jugadores/:id', Jugadorcontroler.GetjugadorId);
router.post('/jugadores', Jugadorcontroler.crearJugador);
router.put('/jugadores/:id', Jugadorcontroler.actualizarJugadorPorId);
router.delete('/jugadores/:id', Jugadorcontroler.deleteJugador);

module.exports = router;