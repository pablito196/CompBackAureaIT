import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',auth.verifyUsuario,categoriaController.add);
router.get('/query',/*auth.verifyAlmacenero,*/categoriaController.query);
router.get('/list',auth.verifyUsuario,categoriaController.list);
//router.get('/list',categoriaController.list);
router.put('/update',auth.verifyUsuario,categoriaController.update);
router.delete('/remove',/*auth.verifyAlmacenero,*/categoriaController.remove);
router.put('/activate',auth.verifyUsuario,categoriaController.activate);
router.put('/deactivate',auth.verifyUsuario,categoriaController.deactivate);

export default router;
