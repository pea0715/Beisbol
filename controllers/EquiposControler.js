const conexion = require('../services/db')

const getEquipo = async (req, res) => {
    const sql = 'SELECT * FROM equipos';

    // Ejecuta la consulta en la base de datos
    conexion.query(sql, (error, filas) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
        } else {
            console.log('Equipos encontrados:', filas);
            res.json(filas); // Devuelve la respuesta como JSON
        }
    });
};
////// Creacion de equipos
const agregarEquipo = async (req, res) => {
    const { nombreEquipo, ciudad, liga } = req.body;

    try {
        const sql = 'INSERT INTO equipos (nombreEquipo, ciudad, liga) VALUES (?, ?, ?)';
        conexion.query(sql, [nombreEquipo, ciudad, liga], (error, resultados) => {
            if (error) {
                res.status(500).json({ error: 'Internal server error1' });
            } else {
                res.status(201).json({ message: 'Equipo agregado exitosamente', id: resultados.insertId });
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error2' });
    }
};


//// editar articulo
const actualizarEquipo = async (req, res) => {
    const equipoId = req.params.id;
    const { nombreEquipo, ciudad, liga } = req.body;

    try {
        const sql = 'UPDATE equipos SET nombreEquipo = ?, ciudad = ?, liga = ? WHERE idEquipo = ?';
        conexion.query(sql, [nombreEquipo, ciudad, liga, equipoId], (error, resultados) => {
            if (error) {
                console.error('Error en la consulta SQL:', error);
                res.status(500).json({ error: 'Internal server error1' });
            } else {
                res.json({ message: 'Equipo actualizado exitosamente2' });
            }
        });
    } catch (error) {
        console.error('Error en la consulta SQL:3', error);
        res.status(500).json({ error: 'Internal server error 4' });
    }
};

///// eliminar
const eliminarEquipo = async (req, res) => {
    const equipoId = req.params.id;

    try {
        const sql = 'DELETE FROM equipos WHERE idEquipo = ?';
        conexion.query(sql, [equipoId], (error, resultados) => {
            if (error) {
                console.error('Error en la consulta SQL:', error);
                res.status(500).json({ error: 'Internal server error222' });
            } else {
                res.json({ message: 'Equipo eliminado exitosamente' });
            }
        });
    } catch (error) {
        console.error('Error en la consulta SQL:', error);
        res.status(500).json({ error: 'Internal server error1' });
    }
};

/// solo muestra uno
const obtenerEquipoPorId = async (req, res) => {
    const equipoId = req.params.id;

    try {
        const sql = 'SELECT * FROM equipos WHERE idEquipo = ?';
        conexion.query(sql, [equipoId], (error, filas) => {
            if (error) {
                res.status(500).json({ error: 'Internal server error' });
            } else {
                if (filas.length > 0) {
                    res.json(filas[0]); // Retorna el primer registro encontrado
                } else {
                    res.status(404).json({ error: 'Equipo not found' });
                }
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = {
    getEquipo,
    agregarEquipo,
    actualizarEquipo,
    eliminarEquipo,
    obtenerEquipoPorId
};