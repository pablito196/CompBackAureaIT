import models from '../models';


export default {
    add: async (req,res,next) =>{
        try {
            const imagenProducto = new models.ImagenProducto();
            
            imagenProducto.producto = req.body.producto
            imagenProducto.filename = req.file.filename;
            imagenProducto.path = '/public/img/uploads/'+req.file.filename;
            imagenProducto.originalname = req.file.originalname;
            
            const reg = await imagenProducto.save();
            
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }

    },
    queryCantidadImagenesProducto: async (req,res,next) =>{
        try {
            const reg = await models.ImagenProducto.find({producto:req.query.producto}).countDocuments();
            if(!reg){
                res.status(200).json(0);
            } else {
                res.status(200).json(reg)
                //res.status(200).send(reg)
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
            const reg = await models.ImagenProducto.find({'nombre':new RegExp(valor,'i')})
            .populate('categoriaempresa',{descripcion:1});
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
            const reg = await models.ImagenProducto.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
        
}
