import models from '../models';

export default {
    add: async (req,res,next) =>{
        try {
            const reg = await models.Empresa.create(req.body);
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
            const reg = await models.Empresa.findOne({_id:req.query._id});
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
            const reg = await models.Empresa.find({'nombre':new RegExp(valor,'i')})
            .populate('categoriaempresa',{descripcion:1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    listActivas: async (req,res,next) =>{
        try {
            let valor=req.query.valor;
            const reg = await models.Empresa.find({estado:1});
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
            const reg = await models.Empresa.findByIdAndUpdate({_id:req.body._id},{categoriaempresa:req.body.categoriaempresa,nombre:req.body.nombre,nit:req.body.nit,direccion:req.body.direccion,
                                                                logo:req.body.logo,telefono:req.body.telefono,ciudad:req.body.ciudad});
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
            const reg = await models.Empresa.findByIdAndDelete({_id:req.body._id});
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
            const reg = await models.Empresa.findByIdAndUpdate({_id:req.body._id},{estado:1});
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
            const reg = await models.Empresa.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    }, 
}
