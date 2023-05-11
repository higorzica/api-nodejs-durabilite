"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCategoria = exports.putCategoria = exports.deleteCategoria = exports.getCategorias = void 0;
const categorias_1 = require("../models/categorias");
const getCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCategorias = yield categorias_1.Categoria.findAll();
    res.json(listCategorias);
});
exports.getCategorias = getCategorias;
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoria = yield categorias_1.Categoria.findByPk(id);
    if (!categoria) {
        res.status(404).json({
            msg: `Não existe essa categoria com esse numero de ID: ${id}`
        });
    }
    else {
        yield categoria.destroy();
        res.json({
            msg: `O categoria foi apagado com sucesso: ${id}`
        });
    }
});
exports.deleteCategoria = deleteCategoria;
const putCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const categoria = yield categorias_1.Categoria.findByPk(id);
    if (categoria) {
        res.json(categoria);
    }
    else {
        res.status(404).json({
            msg: `Não existe um categoria com este ID: ${id}`
        });
    }
});
exports.putCategoria = putCategoria;
const addCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield categorias_1.Categoria.create(body);
        res.json(body);
    }
    catch (error) {
        res.status(400).json({
            msg: 'Falhou a conexão!',
            error
        });
    }
});
exports.addCategoria = addCategoria;
