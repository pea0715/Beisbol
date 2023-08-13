var express = require('express');
var {conexion} = require ('../Beisbol/services/db')
const equipo = require('./Routers/Equipos');
const nombre = require('./Routers/Nombres');

var index = express();

index.use(express.json());
/*
// pruebas conexion
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexion exitosa")
    }
});
// metodo get

*/

index.use('/api', equipo);
index.use('/api', nombre);
// rutas 
index.get('/', function (req, res) {
    res.send('holis pendejo')
})

const puerto = process.env.Puerto || 3000;

index.listen(puerto, function(){
    console.log ("servidor ok en el puerto" + puerto);
});
