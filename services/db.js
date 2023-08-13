var mysql = require('mysql');
var conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'beisbol'
});

conexion.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

module.exports = conexion; 