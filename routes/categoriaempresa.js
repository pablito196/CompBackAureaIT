import routerx from 'express-promise-router';
import categoriaEmpresaController from '../controllers/CategoriaEmpresaController';
import auth from '../middlewares/auth';

const router = routerx();


router.post('/add',auth.verifyAdministrador,categoriaEmpresaController.add);
router.get('/query',/*auth.verifyAlmacenero,*/categoriaEmpresaController.query);
//router.get('/list',auth.verifyAdministrador,categoriaEmpresaController.list);
router.get('/list',/*auth.verifyAdministrador,*/categoriaEmpresaController.list);
router.get('/listActivas',categoriaEmpresaController.listActivas);
router.put('/update',auth.verifyAdministrador,categoriaEmpresaController.update);
router.delete('/remove',/*auth.verifyAlmacenero,*/categoriaEmpresaController.remove);
router.put('/activate',auth.verifyAdministrador,categoriaEmpresaController.activate);
router.put('/deactivate',auth.verifyAdministrador,categoriaEmpresaController.deactivate);

export default router;
