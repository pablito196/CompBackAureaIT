import models from '../models';
import mongoose from 'mongoose';

export default {
    add: async (req,res,next) =>{
        try {
            const reg = await models.Producto.create(req.body);
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
            const reg = await models.Producto.findOne({_id:req.query._id})
            .populate('categoria',{descripcion:1});
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
    queryCodigo: async (req,res,next) =>{
        try {
            const reg = await models.Producto.findOne({codigo:req.query.codigo})
            .populate('categoria',{descripcion:1});
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
            var idEmpresa = mongoose.Types.ObjectId(valor);
            const reg = await models.Producto.find({'empresa':idEmpresa})
            .populate('categoria',{descripcion:1})
            .populate('subcategoria',{descripcion:1})
            .populate('medida',{descripcion:1})
            .populate('presentacion',{descripcion:1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    update: async (req,res,next) =>{
        try {
            const reg = await models.Producto.findByIdAndUpdate({_id:req.body._id},{categoria:req.body.categoria,subcategoria:req.body.subcategoria,descripcion:req.body.descripcion,codigo:req.body.codigo,
                                                                imagen:req.body.imagen,presentacion:req.body.presentacion,cantidadPresentacion:req.body.cantidadPresentacion,
                                                                medida:req.body.medida,cantidadMedida:req.body.cantidadMedida,precioVenta:req.body.precioVenta
            });
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
            const reg = await models.Producto.findByIdAndDelete({_id:req.body._id});
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
            const reg = await models.Producto.findByIdAndUpdate({_id:req.body._id},{estado:1});
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
            const reg = await models.Producto.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    }, 
}
