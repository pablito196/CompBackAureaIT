import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';
///
//import multer from 'multer';
//


//conexion a la bd
mongoose.Promise = global.Promise;
const dbUrl = 'mongodb://localhost:27017/ComprasEnLinea';
mongoose.connect(dbUrl, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true})
.then(mongoose => console.log('Conectado a la BD ComprasEnLinea'))
.catch(err => console.log(err));
///
const app = express();
//middlewars
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
////
//pp.use(multer({dest: path.join(__dirname, 'public/img/uploads/')}).single('image'));

/////
app.use(express.static(path.join(__dirname,'public')));


app.use('/api',router);
app.set('port',process.env.PORT || 3000)

app.listen(app.get('port'),()=>{
    console.log('server on port '+ app.get('port'));
});