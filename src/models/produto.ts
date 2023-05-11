import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Produto = sequelize.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
    },
    preco: {
        type: DataTypes.STRING,
    },
    categoria: {
        type: DataTypes.STRING,
    },
    cor: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.STRING,
    },
    imagem: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
})
