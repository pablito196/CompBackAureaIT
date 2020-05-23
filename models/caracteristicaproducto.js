import mongoose,{Schema} from 'mongoose';
const caracteristicaProductoSchema = new Schema({
    producto:{type: Schema.ObjectId, ref:'producto'},
    nombre:{type:String,maxlength:100,required:true},
    valor:[{
        nombre:{
            type:String,
            required:true,
            maxlength:80
        },
        
    }],
    estado:{type:Number,default:1}
    
});

const CaracteristicaProducto = mongoose.model('caracteristicaproducto',caracteristicaProductoSchema);

export default CaracteristicaProducto; 