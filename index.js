const express = require('express');
require('dotenv').config();

const cors = require('cors');
const {dbConnection} = require('./database/config');

//Crear el servidor de express

const app = express();

//Configurar cors
app.use(cors());

//Base de datos

dbConnection();


//Rutas

app.get('/', (req,res) => {
    res.json({
        ok:true,
        msj: 'Hello world'
    })
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
})