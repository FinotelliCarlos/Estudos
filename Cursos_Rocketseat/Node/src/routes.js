const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


module.exports = routes;

//toda vez que o usuario acessar a rota.
    //req simboliza a requisição feita ao servidor.
    //req vai conter todas as informações possiveis desta requisição.
        //Parametros, corpo da requisição, cabeçalho da requisição, usuario que fez a requisição, autenticação, IP.
    //res se refere a resposta dada mediante a requisição.