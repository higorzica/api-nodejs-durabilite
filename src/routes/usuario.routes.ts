import { Router } from "express";
import { deleteUsuario, getUsuarios, loginUser, newUser } from "../controllers/usuario.controller";

const router = Router();

router.post('/novoUsuario', newUser);
router.post('/login', loginUser);
router.get('/listUsuarios', getUsuarios);
router.delete('/deleteUsuarios', deleteUsuario);

export default router;