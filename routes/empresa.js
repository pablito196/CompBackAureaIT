import routerx from 'express-promise-router';
import empresaController from '../controllers/EmpresaController';
import auth from '../middlewares/auth';
import upload from '../libs/storage';

const router = routerx();

//router.post('/add',/*auth.verifyAlmacenero,*/empresaController.add);
router.post('/add',auth.verifyAdministrador,upload.single('image'), empresaController.add);
router.get('/query',/*auth.verifyAlmacenero,*/empresaController.query);
//router.get('/list',auth.verifyAdministrador,empresaController.list);
router.get('/list',auth.verifyAdministrador,empresaController.list);
router.get('/listActivas',empresaController.listActivas);
router.put('/update',auth.verifyAdministrador,empresaController.update);
router.delete('/remove',/*auth.verifyAlmacenero,*/empresaController.remove);
router.put('/activate',auth.verifyAdministrador,empresaController.activate);
router.put('/deactivate',auth.verifyAdministrador,empresaController.deactivate);
///
router.post('/upload',upload.single('image'),empresaController.upload);

export default router;
