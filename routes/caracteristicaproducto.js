import routerx from 'express-promise-router';
import caracteristicaProductoController from '../controllers/CaracteristicaProductoController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',auth.verifyUsuario,caracteristicaProductoController.add);
router.get('/query',/*auth.verifyAlmacenero,*/caracteristicaProductoController.query);
router.get('/list',auth.verifyUsuario,caracteristicaProductoController.list);
router.put('/activate',/*auth.verifyAlmacenero,*/caracteristicaProductoController.activate);
router.put('/deactivate',/*auth.verifyAlmacenero,*/caracteristicaProductoController.deactivate);

export default router;

