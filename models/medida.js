import mongoose, {Schema} from 'mongoose';
const medidaSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    descripcion:{type:String,maxlength:30,required:true},
    estado:{type:Number,default:1}
});

const Medida = mongoose.model('medida',medidaSchema);
export default Medida;