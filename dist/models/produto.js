"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Produto = connection_1.default.define('produtos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    preco: {
        type: sequelize_1.DataTypes.STRING,
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING,
    },
    cor: {
        type: sequelize_1.DataTypes.STRING,
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING,
    },
    imagem: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
    },
});
