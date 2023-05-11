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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = exports.deleteUsuario = exports.getUsuarios = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuario_1 = require("../models/usuario");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsuarios = yield usuario_1.Usuario.findAll();
    res.json(listUsuarios);
});
exports.getUsuarios = getUsuarios;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.Usuario.findByPk(id);
    if (!usuario) {
        res.status(404).json({
            msg: `Não existe essa categoria com esse numero de ID: ${id}`
        });
    }
    else {
        yield usuario.destroy();
        res.json({
            msg: `O categoria foi apagado com sucesso: ${id}`
        });
    }
});
exports.deleteUsuario = deleteUsuario;
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, senha } = req.body;
    //VALIDAÇÕES
    const usuario = yield usuario_1.Usuario.findOne({ where: { email: email } });
    if (usuario) {
        return res.status(400).json({
            msg: `Existe um usuário cadastrado com esse email ${email}`
        });
    }
    const hashSenha = yield bcrypt_1.default.hash(senha, 10);
    try {
        // SALVAR USUARIO NA BASE DE DADOS
        yield usuario_1.Usuario.create({
            nome: nome,
            email: email,
            senha: senha,
            senhaCript: hashSenha
        });
        res.json({
            msg: `Usuario ${email} criado com sucesso!`,
            usuario: req.body
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Falhou a conexão!',
            error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, senha } = req.body;
    // VALIDAÇÔES SE EXISTE O USUARIO
    const usuario = yield usuario_1.Usuario.findOne({ where: { email: email } });
    if (!usuario) {
        return res.status(400).json({
            msg: `Não existe esse usuario ${email} na base de dados! `
        });
    }
    // VALIDAMOS A SENHA
    const senhaValida = yield bcrypt_1.default.compare(senha, usuario.senhaCript);
    if (!senhaValida) {
        return res.status(400).json({
            msg: `Senha incorreta ${senha}! `
        });
    }
    // GERAR O TOKEN
    const token = jsonwebtoken_1.default.sign({
        email: email
    }, process.env.SECRET_KEY || 'higorzica123');
    res.json({ token });
});
exports.loginUser = loginUser;
