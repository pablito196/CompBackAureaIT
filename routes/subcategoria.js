import routerx from 'express-promise-router';
import auth from '../middlewares/auth';
import subcategoriaController from '../controllers/SubcategoriaController';

const router = routerx();

router.post('/add',auth.verifyUsuario,subcategoriaController.add);
router.get('/query',/*auth.verifyAlmacenero,*/subcategoriaController.query);
router.get('/list',auth.verifyUsuario,subcategoriaController.list);
router.get('/listporcategoria',auth.verifyUsuario,subcategoriaController.listPorCategoria);
//router.get('/list',categoriaController.list);
router.put('/update',auth.verifyUsuario,subcategoriaController.update);
router.delete('/remove',/*auth.verifyAlmacenero,*/subcategoriaController.remove);
router.put('/activate',auth.verifyUsuario,subcategoriaController.activate);
router.put('/deactivate',auth.verifyUsuario,subcategoriaController.deactivate);

export default router;
