import { Router } from "express";
import { getProdutos, postProduto, getProduto, deleteProduto, putProduto } from "../controllers/produto.controller";
import multer from "multer";
import  path  from 'path';
import { v4 as uuidv4 } from 'uuid';

const router = Router();
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname))
    }
});

const upload = multer({
    storage,
    fileFilter(req,file,cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|PNG)$/)) {
            return cb(Error('É permitido somente arquivos no formato jpg e png'))
        }
        cb(null, true)
    }
})

router.get('/listProdutos', getProdutos);
router.get('/listProdutos/:id', getProduto);
router.delete('/listProdutos/:id', deleteProduto);
router.post('/addProduto', upload.single("imagem"), postProduto);
router.put('/listProdutos/:id', putProduto);

export default router;