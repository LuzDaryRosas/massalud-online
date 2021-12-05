let express = require('express');
let app = express();
let bodyParser = require('body-parser')

let cors = require('cors');
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': 'http://localhost:4200',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 200
}));
//middlewares
  app.use(cors());
  app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ exteded: true }));     

let router = express.Router();
app.use(router);

// aqui empece 

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };
  
  app.use(requestTime);
  
  app.get('/', function (req, res) {
    var responseText = 'Hello World!';
    responseText += 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
  });



//


// RUTAS
let pacienteRoute = require('./routes/pacientes')
app.use('/api', pacienteRoute)

let agendaRoute = require('./routes/agenda')
app.use('/api', agendaRoute)

let doctorRoute = require('./routes/doctores')
app.use('/api', doctorRoute)

app.get (`*`,(req,res) => { res.sendFile ( path.resolve (`./public/index.html`) ) } );

/*
let tareaRoute = require('./routes/tarea')
app.use('/api', tareaRoute)
let tableroRoute = require('./routes/tablero')
app.use('/api', tableroRoute)
let usuarioRoute = require('./routes/usuario')
app.use('/api', usuarioRoute)
let bitacoraRoute = require('./routes/bitacora')
app.use('/api', bitacoraRoute)

// aqui ruta clasificacion

let tableroColRoute = require('./routes/tableroCol')
app.use('/api', tableroColRoute)
// RUTAS
*/

app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});
