import mongoose,{Schema} from 'mongoose';
const pedidoSchema = new Schema({
    empresa:{type: Schema.ObjectId, ref:'empresa',required:true},
    cliente:{type: Schema.ObjectId, ref:'cliente',required:true},
    quienRecibe:{type:String,maxlength:120},
    fechaEntrega:{type:Date},
    horaInicioRango:{type:Date},
    horaFinRango:{type:Date},
    transporte:{type:String,maxlength:20},
    detalles:[{
        _id:{
            type:String,
            required:true
        },
        producto:{
            type: Schema.ObjectId, ref:'producto',
            required:true
        },
        cantidad:{
            type:Number,
            required:true
        },
        costo:{
            type:Number,
            required:true
        },
        comentario:{
            type:String,
            maxlength:255
        },
        
    }],
    total:{type:Number,required:true},
    estado:{type:Number,default:1}
});

const Pedido = mongoose.model('pedido',pedidoSchema);

export default Pedido; 