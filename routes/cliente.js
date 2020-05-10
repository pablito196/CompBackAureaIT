import routerx from 'express-promise-router';
import clienteController from '../controllers/ClienteController';
//import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',/*auth.verifyAlmacenero,*/clienteController.add);
router.get('/query',/*auth.verifyAlmacenero,*/clienteController.query);
router.get('/list',/*auth.verifyAlmacenero,*/clienteController.list);
router.put('/update',/*auth.verifyAlmacenero,*/clienteController.update);
router.delete('/remove',/*auth.verifyAlmacenero,*/clienteController.remove);
router.put('/activate',/*auth.verifyAlmacenero,*/clienteController.activate);
router.put('/deactivate',/*auth.verifyAlmacenero,*/clienteController.deactivate);

export default router;
