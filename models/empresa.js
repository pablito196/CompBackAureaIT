import mongoose, {Schema} from 'mongoose';
const empresaSchema = new Schema({

    categoriaempresa: {type: Schema.ObjectId, ref:'categoriaempresa',required:true},
    nombre:{type:String,maxlength:120,unique:true,required:true},
    nit:{type:String,maxlength:20},
    direccion:{type:String,maxlength:70},
    logo:{type:String,maxlength:80},
    telefono:{type:String,maxlength:15},
    ciudad:{type:String,maxlength:30},
    categoria:{type:String,maxlength:30},
    estado:{type:Number,default:1}
    
});

const Empresa = mongoose.model('empresa',empresaSchema);
export default Empresa;