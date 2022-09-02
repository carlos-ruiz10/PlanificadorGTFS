const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const planificador = require('./components/planificador/network');

const app = express();

app.use(bodyParser.json());


// ROUTER
app.use('/api/planificador', planificador);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});