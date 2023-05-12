import { Sequelize } from 'sequelize'
import 'dotenv/config'

const sequelize = new Sequelize(process.env.DB_NAME || 'durabilite', process.env.DB_USER || 'root', process.env.DB_PASSWORD || 'higor123', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql' 
});

console.log(process.env.DB_NAME)

export default sequelize;