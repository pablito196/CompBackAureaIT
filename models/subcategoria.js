import mongoose, {Schema} from 'mongoose';
const subcategoriaSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    categoria: {type: Schema.ObjectId, ref:'categoria',required:true},
    descripcion:{type:String,maxlength:100,required:true},
    estado:{type:Number,default:1}
});

const Subcategoria = mongoose.model('subcategoria',subcategoriaSchema);
export default Subcategoria;