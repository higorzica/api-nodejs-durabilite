import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senhaCript: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
