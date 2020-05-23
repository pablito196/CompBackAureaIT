import mongoose, {Schema} from 'mongoose';
const imagenProductoSchema = new Schema({

    producto: {type: Schema.ObjectId, ref:'producto',required:true},
    filename:{type:String},
    path:{type:String},
    originalname:{type:String}
});

const ImagenProducto = mongoose.model('imagenproducto',imagenProductoSchema);
export default ImagenProducto;