import routerx from 'express-promise-router';
import imagenProductoController from '../controllers/ImagenProductoController';
import auth from '../middlewares/auth';
import upload from '../libs/storage';

const router = routerx();


router.post('/add',auth.verifyUsuario,upload.single('image'), imagenProductoController.add);
router.get('/queryimagenes',/*auth.verifyAlmacenero,*/imagenProductoController.queryCantidadImagenesProducto);
//router.get('/list',auth.verifyAdministrador,empresaController.list);
router.get('/list',auth.verifyUsuario,imagenProductoController.list);
router.delete('/remove',/*auth.verifyAlmacenero,*/imagenProductoController.remove);

export default router;
