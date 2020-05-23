import models from '../models';
import mongoose from 'mongoose';

export default {
    add: async (req,res,next) =>{
        try {
            const reg = await models.CaracteristicaProducto.create(req.body);
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
            const reg = await models.CaracteristicaProducto.findOne({_id:req.query._id});
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
    list: async (req,res,next) =>{
        try {
            let valor=req.query.valor;
            var idProducto = mongoose.Types.ObjectId(valor);
            //let valor=req.query.valor;
            const reg = await models.CaracteristicaProducto.find({'producto':idProducto});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    remove: async (req,res,next) =>{
        try {
            let valor=req.query.valor;
            var idCaracteristica = mongoose.Types.ObjectId(valor);
            const reg = await models.CaracteristicaProducto.findByIdAndDelete({'_id':idCaracteristica});
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
            const reg = await models.CaracteristicaProducto.findByIdAndUpdate({_id:req.body._id},{estado:1});
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
            const reg = await models.CaracteristicaProducto.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    }, 

    
}
