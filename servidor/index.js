const express = require('express');
const app = express();

// Settings
//Creacion de vairable port la cual contiene el puerto 3000, de esta manera puede ser reutilizable en toda la app
//Configuracion del servidor, si existe un puerto dado por el SO || utiliza puerto 3000
app.set('port', process.env.PORT || 3000);



// Middlewars o Funciones de procesamiento de datos




// Routes




// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server en puerto 3000')
});