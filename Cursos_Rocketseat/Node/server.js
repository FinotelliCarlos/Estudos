const express = require('express');
//importando o express
const mongoose = require('mongoose');
//importando o mongoose

//Iniciando o App
const app = express();
//constante app executando a função express

//Conectando o DB
mongoose.connect('mongodb://localhost:27017/nodeAPI', {useNewUrlParser: true});

//Primeira Rota
app.get('/', (req, res) => {
    res.send('Hello World');
});
//toda vez que o usuario acessar a rota.
    //req simboliza a requisição feita ao servidor.
    //req vai conter todas as informações possiveis desta requisição.
        //Parametros, corpo da requisição, cabeçalho da requisição, usuario que fez a requisição, autenticação, IP.
    //res se refere a resposta dada mediante a requisição.

app.listen(7050);
//fazendo com que a aplicação ouça a porta 7050