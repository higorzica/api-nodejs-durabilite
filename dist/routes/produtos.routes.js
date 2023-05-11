"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produto_controller_1 = require("../controllers/produto.controller");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const router = (0, express_1.Router)();
const storage = multer_1.default.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
    }
});
const upload = (0, multer_1.default)({
    storage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|PNG)$/)) {
            return cb(Error('É permitido somente arquivos no formato jpg e png'));
        }
        cb(null, true);
    }
});
router.get('/listProdutos', produto_controller_1.getProdutos);
router.get('/listProdutos/:id', produto_controller_1.getProduto);
router.delete('/listProdutos/:id', produto_controller_1.deleteProduto);
router.post('/addProduto', upload.single("imagem"), produto_controller_1.postProduto);
router.put('/listProdutos/:id', produto_controller_1.putProduto);
exports.default = router;
