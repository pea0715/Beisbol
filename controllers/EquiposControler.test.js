const {getEquipo, agregarEquipo, actualizarEquipo, eliminarEquipo, obtenerEquipoPorId} = require('../controllers/EquiposControler');
const xd = require('../services/db');


describe('agregarEquipo', () => {
  // debe validar que todos los campos obligatorios estén presentes
  it('should validate that all required fields are present', async () => {
    const req = {
      body: {
        idequipo: 'hola',
        nombreequipo: 'Team A',
        ciudad: 'City A',
        liga: 'League A'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    await agregarEquipo(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });
  // debe manejar formatos de fecha inválidos
  it('should handle invalid date formats', async () => {
    const req = {
      body: {
        idequipo: 'hola',
        nombreequipo: 'Team A',
        ciudad: 'City A',
        liga: 'League A',
        fecha: '2022-01-32'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    await agregarEquipo(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });


});


describe('actualizarEquipo', () => {
 // debe devolver un código de estado 500 y un mensaje de error si la consulta SQL falla
  it('should return a 500 status code and an error message if the SQL query fails', async () => {
    // Arrange
    const req = {
      params: { id: 'hola' },
      body: {
        nombreequipo: '',
        ciudad: 'New City',
        liga: 'New League',
        fecha: '2022-01-01'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const xdMock = jest.fn().mockRejectedValue(new Error('SQL query failed'));

    
    await actualizarEquipo(req, res);

  
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });

});


