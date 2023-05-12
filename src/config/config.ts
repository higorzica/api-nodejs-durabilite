import * as dotenv from 'dotenv';

dotenv.config();

const config = {
    "desenvolvedor": {
        "host" : process.env.DB_HOST,
        "user" : process.env.DB_USER,
        "password" : process.env.DB_PASSWORD,
        "dbname" : process.env.DB_NAME,
        "dbport" : process.env.DB_PORT,
        "dialect": process.env.DB_DIALECT
    },
    "teste": {
        "host" : process.env.DB_HOST,
        "user" : process.env.DB_USER,
        "password" : process.env.DB_PASSWORD,
        "dbname" : process.env.DB_NAME,
        "dbport" : process.env.DB_PORT,
        "dialect": process.env.DB_DIALECT
    },
    "producao": {
        "host" : process.env.DB_HOST,
        "user" : process.env.DB_USER,
        "password" : process.env.DB_PASSWORD,
        "dbname" : process.env.DB_NAME,
        "dbport" : process.env.DB_PORT,
        "dialect": process.env.DB_DIALECT
    }
}

export default config;