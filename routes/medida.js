import routerx from 'express-promise-router';
import medidaController from '../controllers/MedidaController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',auth.verifyUsuario,medidaController.add);
router.get('/query',/*auth.verifyAlmacenero,*/medidaController.query);
router.get('/list',auth.verifyUsuario,medidaController.list);
router.put('/update',auth.verifyUsuario,medidaController.update);
router.delete('/remove',/*auth.verifyAlmacenero,*/medidaController.remove);
router.put('/activate',auth.verifyUsuario,medidaController.activate);
router.put('/deactivate',auth.verifyUsuario,medidaController.deactivate);

export default router;
