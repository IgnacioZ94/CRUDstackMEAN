const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');
const router = require('./routes/router-peopple');


// Settings
//Creacion de vairable port la cual contiene el puerto 3000, de esta manera puede ser reutilizable en toda la app
//Configuracion del servidor, si existe un puerto dado por el SO || utiliza puerto 3000
app.set('port', process.env.PORT || 3000);



// Middlewars o Funciones de procesamiento de datos
app.use(morgan('dev'));
app.use(express.json());



// Routes
app.use('/api/peopple', require('./routes/router-peopple'));



// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server en puerto',app.get('port'))
});