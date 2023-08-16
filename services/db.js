
const pg = require("pg");

//Conexion con Base de Datos 
const xd = async (sql) => {
  const client = new pg.Client({
      user: 'postgres',
      host: 'localhost',
      database: 'beisbol1',
      password: '123456',
      port: 3379,
    });

  await client.connect();
  const res = await client.query(sql);
  await client.end();
  return res
};

module.exports = { xd };