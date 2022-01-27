const express =require('express');
const jwt = require('jsonwebtoken');
const app = express();
const routes = require('./src/routes')
const cors = require('cors')
app.name = 'API';
app.use(cors())

app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

//conexion a rutas
app.use('/', routes)

app.listen(4001, ()=>{
    console.log('server on port 4001')
})