import routerx from 'express-promise-router';
import presentacionController from '../controllers/PresentacionController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',auth.verifyUsuario,presentacionController.add);
router.get('/query',/*auth.verifyAlmacenero,*/presentacionController.query);
router.get('/list',auth.verifyUsuario,presentacionController.list);
router.get('/listactivas',auth.verifyUsuario,presentacionController.listactivas);
router.put('/update',auth.verifyUsuario,presentacionController.update);
router.delete('/remove',/*auth.verifyAlmacenero,*/presentacionController.remove);
router.put('/activate',auth.verifyUsuario,presentacionController.activate);
router.put('/deactivate',auth.verifyUsuario,presentacionController.deactivate);

export default router;
