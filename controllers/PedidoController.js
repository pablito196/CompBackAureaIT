import models from '../models';
import mongoose from 'mongoose';
/*async function aumentarCantidad(idproducto,cantidadIngreso){
    let {cantidad} = await models.Producto.findOne({_id:idarticulo});
    let nuevaCantidad = parseInt(cantidad)+parseInt(cantidadIngreso);
    const reg=await models.Articulo.findByIdAndUpdate({_id:idarticulo},{cantidad:nuevaCantidad});
}

async function disminuirCantidad(idarticulo,cantidadIngreso){
    let {cantidad} = await models.Articulo.findOne({_id:idarticulo});
    let nuevaCantidad = parseInt(cantidad)-parseInt(cantidadIngreso);
    const reg=await models.Articulo.findByIdAndUpdate({_id:idarticulo},{cantidad:nuevaCantidad});
}*/

export default {
    add: async (req,res,next) =>{
        try {
            const reg = await models.Pedido.create(req.body);
            //actualizar cantidad
            /*let detalles=req.body.detalles;
            detalles.map(function(x){
                disminuirCantidad(x._id,x.cantidad);
            }); //recorrer el array detalles de venta*/
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }

    },
    query: async (req,res,next) =>{
        try {
            const reg = await models.Pedido.findOne({_id:req.query._id});
            if(!reg){
                res.status(400).send({
                    message: 'El registro no existe'
                });
            } else {
                res.status(200).json(reg);
            }   
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    //lista de pedidos por empresa
    list: async (req,res,next) =>{
        try {
            let valor=req.query.valor;
            var idEmpresa = mongoose.Types.ObjectId(valor);
            const reg = await models.Pedido.find({'empresa':idEmpresa});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    //lista de pedidos pendientes de envio por empresa
    listPedidosPendientes: async (req,res,next) =>{
        try {
            let valor=req.query.valor;
            var idEmpresa = mongoose.Types.ObjectId(valor);
            const reg = await models.Pedido.find({'empresa':idEmpresa, estado:1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    activate: async (req,res,next) =>{
        try {
            const reg = await models.Pedido.findByIdAndUpdate({_id:req.body._id},{estado:1});
            //actualizar cantidad
            /*let detalles=reg.detalles;
            detalles.map(function(x){
                disminuirCantidad(x._id,x.cantidad);
            });*/ //recorrer el array detalles de venta
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    deactivate: async (req,res,next) =>{
        try {
            const reg = await models.Pedido.findByIdAndUpdate({_id:req.body._id},{estado:0});
            //actualizar cantidad
            /*let detalles=reg.detalles;
            detalles.map(function(x){
                aumentarCantidad(x._id,x.cantidad);
            });*/ //recorrer el array detalles de ingreso
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    }
        
}
