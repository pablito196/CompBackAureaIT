import routerx from 'express-promise-router';
import productoController from '../controllers/ProductoController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',auth.verifyUsuario,productoController.add);
router.get('/query',/*auth.verifyAlmacenero,*/productoController.query);
router.get('/queryCodigo',/*auth.verifyAlmacenero,*/productoController.queryCodigo);
router.get('/list',auth.verifyUsuario,productoController.list);
router.put('/update',auth.verifyUsuario,productoController.update);
router.delete('/remove',/*auth.verifyAlmacenero,*/productoController.remove);
router.put('/activate',auth.verifyUsuario,productoController.activate);
router.put('/deactivate',auth.verifyUsuario,productoController.deactivate);

export default router;
