const express = require('express')
const server = express();

//Importacion de rutas
const usuarioRoute = require('./usuario')

//Uso de rutas
server.use('/user', usuarioRoute)

module.exports = server