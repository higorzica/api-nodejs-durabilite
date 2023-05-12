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
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const path_1 = __importDefault(require("path"));
const usuario_routes_1 = __importDefault(require("../routes/usuario.routes"));
const produtos_routes_1 = __importDefault(require("../routes/produtos.routes"));
const categorias_routes_1 = __importDefault(require("../routes/categorias.routes"));
const cors_1 = __importDefault(require("cors"));
const produto_1 = require("./produto");
const usuario_1 = require("./usuario");
const categorias_1 = require("./categorias");
require("dotenv/config");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.node_env = process.env.NODE_ENV || 'desenvolvedor';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }
    listen() {
        this.app.listen(this.port || 3000, () => {
            console.log('Aplicação está no ar', this.port, 'você está conectado como:', this.node_env);
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, express_2.urlencoded)({ extended: true }));
        // usando cors
        this.app.use((0, cors_1.default)());
        //
        this.app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
    }
    routes() {
        this.app.use('/api/usuarios', usuario_routes_1.default);
        this.app.use('/api/produtos', produtos_routes_1.default);
        this.app.use('/api/categorias', categorias_routes_1.default);
    }
    conectarDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield produto_1.Produto.sync();
                yield usuario_1.Usuario.sync();
                yield categorias_1.Categoria.sync();
                console.log('CONECTADO COM SUCESSO');
            }
            catch (error) {
                console.error('Não foi possivel conectar ao banco de dados:', error);
            }
        });
    }
}
exports.default = Server;
