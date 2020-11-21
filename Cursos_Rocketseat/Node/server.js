const express = require('express');
//importando o express
const mongoose = require('mongoose');
//importando o mongoose
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
//constante app executando a função express

//Conectando o DB
mongoose.connect('mongodb://localhost:27017/mongodb',
 {useNewUrlParser: true,  useUnifiedTopology: true});

requireDir('./src/models');

//Rotas
app.use('/',require('./src/routes'));

app.listen(7050);
//fazendo com que a aplicação ouça a porta 7050