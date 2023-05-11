import Server from "./models/server";
import dotenv from 'dotenv'

// CONFIGURAÇÃO DE PORTA DA API
dotenv.config();

const server = new Server();

server.listen();