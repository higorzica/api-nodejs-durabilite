"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'durabilite', process.env.DB_USER || 'root', process.env.DB_PASSWORD || 'higor123', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
});
console.log(process.env.DB_NAME);
exports.default = sequelize;
