const express = require('express');

const pedidosController = require('./controllers/pedidos')

const routes = express.Router();

routes.get("/pedidos", pedidosController.listarPedidos);

routes.post("/pedido", pedidosController.adicionarPedido);

module.exports = routes;