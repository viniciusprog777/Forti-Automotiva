const Sequelize = require('sequelize');
const dbConfig = require("../config/database");

const Pedido = require("../models/Pedido");

const conex = new Sequelize(dbConfig);

Pedido.init(conex);
