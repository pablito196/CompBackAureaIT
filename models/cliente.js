import mongoose, {Schema} from 'mongoose';
const clienteSchema = new Schema({
    nombre:{type:String,maxlength:120,unique:true,required:true},
    proveedor:{type:String,maxlength:120},
    avatar:{type:String,maxlength:80},
    fechaRegistro:{type:Date,default:Date.now},
    razonSocial:{type:String,maxlength:120},
    nit:{type:String,maxlength:20},
    direccion:{type:String,maxlength:70},
    telefono:{type:String,maxlength:15},
    ciudad:{type:String,maxlength:30},
    email:{type:String,maxlength:100},
    zona:{type:String,maxlength:150},
    estado:{type:Number,default:1}
    
});

const Cliente = mongoose.model('cliente',clienteSchema);
export default Cliente;