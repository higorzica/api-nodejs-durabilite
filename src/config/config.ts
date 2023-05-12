import * as dotenv from 'dotenv';

dotenv.config();

const config = {
    "desenvolvedor": {
        "DB_HOST" : process.env.DB_HOST,
        "DB_USER" : process.env.DB_USER,
        "DB_PASSWORD" : process.env.DB_PASSWORD,
        "DB_NAME" : process.env.DB_NAME,
        "DB_PORT" : process.env.DB_PORT,
        "DB_DIALECT": process.env.DB_DIALECT
    },
    "teste": {
        "DB_HOST" : process.env.DB_HOST,
        "DB_USER" : process.env.DB_USER,
        "DB_PASSWORD" : process.env.DB_PASSWORD,
        "DB_NAME" : process.env.DB_NAME,
        "DB_PORT" : process.env.DB_PORT,
        "DB_DIALECT": process.env.DB_DIALECT
    },
    "producao": {
        "DB_HOST" : process.env.DB_HOST,
        "DB_USER" : process.env.DB_USER,
        "DB_PASSWORD" : process.env.DB_PASSWORD,
        "DB_NAME" : process.env.DB_NAME,
        "DB_PORT" : process.env.DB_PORT,
        "DB_DIALECT": process.env.DB_DIALECT
    }
}

export default config;