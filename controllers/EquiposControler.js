const {xd} = require('../services/db');
// llamar equipo
const getEquipo = async (req, res) => {
  try {
    const query = 'SELECT * FROM equipos';
    const result = await xd(query); // Llama a la función xd directamente
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
/// agregar
const agregarEquipo = async (req, res) => {
    const { idequipo,nombreequipo, ciudad, liga, fecha } = req.body;
    try {
        const sql = `INSERT INTO equipos (idequipo,nombreequipo, ciudad, liga,fecha) VALUES ('${idequipo}','${nombreequipo}', '${ciudad}', '${liga}', '${fecha}')`;
        await xd(sql);
        res.status(201).json({ message: 'Equipo agregado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

//// editar 
const actualizarEquipo = async (req, res) => {
    const idequipo = req.params.id;
    const { nombreequipo, ciudad, liga, fecha } = req.body;
    
    try {
        const sql = `UPDATE equipos SET nombreequipo = '${nombreequipo}', ciudad = '${ciudad}', liga = '${liga}', fecha = '${fecha}' WHERE idequipo = '${idequipo}'`;
        await xd(sql, [nombreequipo, ciudad, liga, fecha, idequipo]); // Corregir el orden de los parámetros
        res.json({ message: 'Equipo actualizado exitosamente' });
    } catch (error) {
        console.error('Error en la consulta SQL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
/// eliminar 
const eliminarEquipo = async (req, res) => {
    const idequipo = req.params.id;

    try {
        const sql = `DELETE FROM equipos WHERE idequipo = '${idequipo}';`;
        await xd(sql, [idequipo]);
        res.json({ message: 'Equipo eliminado exitosamente' });
    } catch (error) {
        console.error('Error en la consulta SQL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
// uno solo
const obtenerEquipoPorId = async (req, res) => {
    const idequipo = req.params.id;

    const sql = 'SELECT * FROM equipos WHERE idequipo = ${idequipo}';
    try {
        const result = await xd(sql, [idequipo]);
        const filas = result.rows;
        // ... manejo de resultados ...
    } catch (error) {
        console.error('Error en la consulta SQL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getEquipo,
    obtenerEquipoPorId,
    agregarEquipo,
    actualizarEquipo,
    eliminarEquipo

};