import mongoose, {Schema} from 'mongoose';
const categoriaEmpresaSchema = new Schema({
    descripcion:{type:String,maxlength:50,required:true},
    estado:{type:Number,default:1}
});

const CategoriaEmpresa = mongoose.model('categoriaempresa',categoriaEmpresaSchema);
export default CategoriaEmpresa;