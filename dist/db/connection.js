"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'durabilite', process.env.DB_USER || 'root', process.env.DB_PASSWORD || 'higor123', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: 3304
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
exports.default = sequelize;
