const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
//constante app executando a função express
app.use(express.json());
//permitindo que eu envia dados em json para minha aplicação
app.use(cors());

//Conectando o DB
mongoose.connect('mongodb://localhost:27017/mongodb',
 {useNewUrlParser: true,  useUnifiedTopology: true});

requireDir('./src/models');

//Rotas
app.use('/',require('./src/routes'));

app.listen(7050);
//fazendo com que a aplicação ouça a porta 7050