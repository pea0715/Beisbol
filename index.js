var express = require('express');
 // Importa "pool" desde el archivo db.js
const equipo = require('./Routers/Equipos');
const nombre = require('./Routers/Nombres');

const app= express();

app.use(express.json());

app.use('/api', equipo);
app.use('/api', nombre);

app.get('/', function (req, res) {
    res.send('holis pendejo');
});

const puerto = process.env.PORT || 3000; // Cambia "Puerto" a "PORT"

app.listen(puerto, function(){
    console.log("servidor ok en el puerto " + puerto);
});