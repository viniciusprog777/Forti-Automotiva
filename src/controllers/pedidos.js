const Pedido = require('../models/Pedido');
const {Op} = require('sequelize');

module.exports = {
    async listarPedidos (req, res){
        const cliente_params = req.query.cliente

        if (cliente_params) {
            let cliente = await Pedido.findAll({
                where:{
                    cliente: {[Op.like]: `%${cliente_params}%`}
                }
            })
            return res.status(200).send(cliente);

        }
        try {
            const pedidos = await Pedido.findAll();
        
            res.status(200).send(pedidos);
        } catch (error) {
            console.log(error);
            res.status(500).send({error})
        }
    },
    async adicionarPedido (req, res){
        
        const {cliente, produto, quantidade} = req.body;

        if (!cliente && !produto && !quantidade) 
            return res.status(422).send("Erro na requisição do pedido. Verifique os dados de compra!")
        
        try {
            
            const pedido = await Pedido.create({
                cliente, produto, quantidade
            })
            res.status(200).send("Pedido Registrado");
        } catch (error) {
            console.log(error);
            res.status(500).send({error})
        }
    }
}