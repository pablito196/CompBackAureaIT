import routerx from 'express-promise-router';
import pedidoController from '../controllers/PedidoController';
//import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',/*auth.verifyAlmacenero,*/pedidoController.add);
router.get('/query',/*auth.verifyAlmacenero,*/pedidoController.query);
router.get('/list',/*auth.verifyAlmacenero,*/pedidoController.list);
router.put('/activate',/*auth.verifyAlmacenero,*/pedidoController.activate);
router.put('/deactivate',/*auth.verifyAlmacenero,*/pedidoController.deactivate);

export default router;
