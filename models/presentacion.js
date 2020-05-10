import mongoose, {Schema} from 'mongoose';
const presentacionSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    descripcion:{type:String,maxlength:30,required:true},
    estado:{type:Number,default:1}
});

const Presentacion = mongoose.model('presentacion',presentacionSchema);
export default Presentacion;