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
exports.putProduto = exports.deleteProduto = exports.getProduto = exports.postProduto = exports.getProdutos = void 0;
const produto_1 = require("../models/produto");
const getProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProdutos = yield produto_1.Produto.findAll();
    res.json(listProdutos);
});
exports.getProdutos = getProdutos;
const postProduto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { nome, preco, categoria, cor, descricao, status } = req.body;
    if (!nome) {
        return res.status(422).json({
            msg: `O campo nome é obrigatório `
        });
    }
    if (!preco) {
        return res.status(422).json({
            msg: `O campo nome é obrigatório `
        });
    }
    if (!categoria) {
        return res.status(422).json({
            msg: `O campo nome é obrigatório `
        });
    }
    try {
        // SALVAR USUARIO NA BASE DE DADOS
        const produto = yield produto_1.Produto.create({
            nome: nome,
            preco: preco,
            categoria: categoria,
            cor: cor,
            descricao: descricao,
            imagem: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path,
            status: status
        });
        yield produto.save();
        res.status(201).json({
            msg: `Produto ${nome} criado com sucesso!`,
            produto
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Falhou ao tentar cadastrar o produto!',
            error
        });
    }
});
exports.postProduto = postProduto;
const getProduto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const produtoUm = yield produto_1.Produto.findByPk(id);
    if (produtoUm) {
        res.json(produtoUm);
    }
    else {
        res.status(404).json({
            msg: `Não existe esse produto com esse numero de ID: ${id}`
        });
    }
});
exports.getProduto = getProduto;
const deleteProduto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const produto = yield produto_1.Produto.findByPk(id);
    if (!produto) {
        res.status(404).json({
            msg: `Não existe esse produto com esse numero de ID: ${id}`
        });
    }
    else {
        yield produto.destroy();
        res.json({
            msg: `O produto foi apagado com sucesso: ${id}`
        });
    }
});
exports.deleteProduto = deleteProduto;
const putProduto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, preco, categoria, cor, descricao, status } = req.body;
    const { id } = req.params;
    const produto = yield produto_1.Produto.findByPk(id);
    if (produto) {
        const produto = yield produto_1.Produto.update({ nome, preco, categoria, cor, descricao, status }, { where: { id } });
        res.json(produto);
    }
    else {
        res.status(404).json({
            msg: `Não existe um produto com este ID: ${id}`
        });
    }
});
exports.putProduto = putProduto;
