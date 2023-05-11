import { Router } from "express";
import { addCategoria, getCategorias, deleteCategoria, putCategoria } from "../controllers/categorias.controller";

const router = Router();

router.post('/addCategoria', addCategoria);
router.get('/listCategorias', getCategorias);
router.delete('/listCategorias/:id', deleteCategoria);
router.put('/listCategorias/:id', putCategoria);

export default router;