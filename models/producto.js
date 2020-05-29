import mongoose,{Schema} from 'mongoose';
const productoSchema = new Schema({
    empresa:{type: Schema.ObjectId, ref:'empresa',required:true},
    categoria:{type: Schema.ObjectId, ref:'categoria'},
    descripcion:{type:String,maxlength:255,required:true},
    codigo:{type:String,maxlength:30},
    //imagen:{type:String,maxlength:150},
    presentacion:{type: Schema.ObjectId, ref:'presentacion'},
    cantidadPresentacion:{type:Number},
    medida:{type: Schema.ObjectId, ref:'medida'},
    cantidadMedida:{type:Number},
    precioVenta:{type:Number,required:true},
    estado:{type:Number,default:1}
    
});

const Producto = mongoose.model('producto',productoSchema);

export default Producto; 