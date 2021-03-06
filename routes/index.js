import routerx from 'express-promise-router';
import empresaRouter from './empresa';
import categoriaRouter from './categoria';
import subcategoriaRouter from './subcategoria';
import clienteRouter from './cliente';
import caracteristicaProductoRouter from './caracteristicaproducto';
import medidaRouter from './medida'
import presentacionRouter from './presentacion';
import pedidoRouter from './pedido';
import usuarioRouter from './usuario';
import productoRouter from './producto';
import categoriaEmpresaRouter from './categoriaempresa';
import imagenProductoRouter from './imagenproducto';

const router = routerx();

router.use('/empresa',empresaRouter);
router.use('/categoria',categoriaRouter);
router.use('/subcategoria',subcategoriaRouter);
router.use('/cliente',clienteRouter);
router.use('/caracteristicaproducto',caracteristicaProductoRouter);
router.use('/medida',medidaRouter);
router.use('/presentacion',presentacionRouter);
router.use('/pedido',pedidoRouter);
router.use('/usuario',usuarioRouter);
router.use('/producto',productoRouter);
router.use('/categoriaempresa',categoriaEmpresaRouter);
router.use('/imagenproducto',imagenProductoRouter);

export default router;