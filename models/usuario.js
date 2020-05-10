import mongoose, {Schema} from 'mongoose';
const usuarioSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    rol:{type:String,maxlength:30,},
    nombre:{type:String,maxlength:50,unique:true,required:true},
    ci:{type:String,maxlength:20},
    direccion:{type:String,maxlength:70},
    telefono:{type:String,maxlength:20},
    email:{type:String,maxlength:50,unique:true,required:true},
    password:{type:String,maxlength:64,required:true},
    estado:{type:Number,default:1}
});

const Usuario = mongoose.model('usuario',usuarioSchema);
export default Usuario;