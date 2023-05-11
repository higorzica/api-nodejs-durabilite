import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('durabilite', 'root', 'higor123', {
    host: 'localhost',
    dialect: 'mysql',    
});

export default sequelize;