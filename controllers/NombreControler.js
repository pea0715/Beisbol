const conexion = require('../services/db')
// Operación de Leer todos los jugadores
const obtenerTodosLosJugadores = (req, res) => {
    const sql = 'SELECT * FROM jugadores';
    
    conexion.query(sql, (error, filas) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener los jugadores' });
        } else {
            res.json(filas);
        }
    });
};

// Operación de Leer un jugador por su ID
const obtenerJugadorPorId = (req, res) => {
    const jugadorId = req.params.id;
    const sql = 'SELECT * FROM jugadores WHERE idNombre = ?';
    
    conexion.query(sql, [jugadorId], (error, filas) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener el jugador' });
        } else {
            if (filas.length > 0) {
                res.json(filas[0]);
            } else {
                res.status(404).json({ error: 'Jugador no encontrado' });
            }
        }
    });
};

// Operación de Crear un nuevo jugador
const crearJugador = (req, res) => {
    const { nombre, posicion, equipo, numero } = req.body;
    const sql = 'INSERT INTO jugadores (NombreJugador, posicion, equipo, numeroCamisa) VALUES (?, ?, ?, ?)';
    
    conexion.query(sql, [nombre, posicion, equipo, numero], (error, resultados) => {
        if (error) {
            res.status(500).json({ error: 'Error al crear el jugador' });
        } else {
            res.status(201).json({ message: 'Jugador creado exitosamente', id: resultados.insertId });
        }
    });
};

// Operación de Actualizar un jugador por su ID
const actualizarJugadorPorId = (req, res) => {
    const jugadorId = req.params.id;
    const { nombre, posicion, equipo, numero } = req.body;
    const sql = 'UPDATE jugadores SET NombreJugador = ?, posicion = ?, equipo = ?, numeroCamisa = ? WHERE idNombre = ?';
    
    conexion.query(sql, [nombre, posicion, equipo, numero, jugadorId], (error, resultados) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar el jugador' });
        } else {
            res.json({ message: 'Jugador actualizado exitosamente' });
        }
    });
};
// Operación de Eliminar un jugador por su ID
const eliminarJugadorPorId = (req, res) => {
    const jugadorId = req.params.id;
    const sql = 'DELETE FROM jugadores WHERE idNombre = ?';
    
    conexion.query(sql, [jugadorId], (error, resultados) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el jugador' });
        } else {
            res.json({ message: 'Jugador eliminado exitosamente' });
        }
    });
};

module.exports = {
    obtenerTodosLosJugadores,
    obtenerJugadorPorId,
    crearJugador,
    actualizarJugadorPorId,
    eliminarJugadorPorId
};