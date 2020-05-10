import mongoose, {Schema} from 'mongoose';
const categoriaSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    descripcion:{type:String,maxlength:100,required:true},
    estado:{type:Number,default:1}
});

const Categoria = mongoose.model('categoria',categoriaSchema);
export default Categoria;