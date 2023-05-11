import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Categoria = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
    }
})
