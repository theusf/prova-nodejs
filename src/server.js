const express = require('express');
const conexao = require('./config/database');
const rotas = require('./rotas/rotas')

require('marko/node-require').install();
require('marko/express');

const server = express();

const bodyParser = require('body-parser');

// essa permite que o nodejs consiga pegar dados via req.body
server.use(bodyParser.urlencoded({
    extended: true
}));


rotas(server);



module.exports = server;
