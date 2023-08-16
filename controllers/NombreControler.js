const {db} = require('../services/db');


const getJugadores = async (req, res) => {
    try {
      const query = 'SELECT * FROM jugadores';
      const result = await db.xd(query); // Llama a la función xd del módulo db
      res.json(result.rows);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

// Operación de Leer un jugador por su ID
const GetjugadorId = async (req, res) => {
    const idnombre = req.params.id;

    const sql = `SELECT * FROM jugadores WHERE idnombre = '${idnombre}'`;
    try {
        const result = await xd(sql, [idnombre]);
        const filas = result.rows;
        // ... manejo de resultados ...
    } catch (error) {
        console.error('Error en la consulta SQL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Operación de Crear un nuevo jugador
const crearJugador = async (req, res) => {
    const { idnombre, nombrejugador, posicion, equipo, numerocamisa } = req.body;
    try {
        const sql = `INSERT INTO jugadores (idnombre,nombrejugador, posicion, equipo,numerocamisa) VALUES ('${idnombre}','${nombrejugador}', '${posicion}', '${equipo}', '${numerocamisa}')`;
        await xd(sql);
        res.status(201).json({ message: 'Equipo agregado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



// Operación de Actualizar un jugador por su ID
const actualizarJugadorPorId = async (req, res) => {
    const idnombre = req.params.id;
    const { nombrejugador, posicion, equipo, numerocamisa } = req.body;
    
    try {
        const sql = `UPDATE jugadores SET nombrejugador = '${nombrejugador}', posicion = '${posicion}', equipo = '${equipo}', numerocamisa = '${numerocamisa}' WHERE idnombre = '${idnombre}'`;
        await xd(sql, [nombrejugador, posicion, equipo, numerocamisa, idnombre]); // Corregir el orden de los parámetros
        res.json({ message: 'Equipo actualizado exitosamente' });
    } catch (error) {
        console.error('Error en la consulta SQL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Operación de Eliminar un jugador por su ID
const deleteJugador = async (req, res) => {
    const idnombre = req.params.id;

    try {
        const sql = `DELETE FROM jugadores WHERE idnombre = '${idnombre}';`;
        await xd(sql, [idnombre]);
        res.json({ message: 'Equipo eliminado exitosamente' });
    } catch (error) {
        console.error('Error en la consulta SQL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getJugadores,
    GetjugadorId,
    crearJugador,
    actualizarJugadorPorId,
    deleteJugador
   
};
//obtenerJugadorPorId,
//crearJugador,
//actualizarJugadorPorId,
//eliminarJugadorPorId,