import express, {Application} from 'express'
import { urlencoded, json } from 'express';
import  path  from 'path';
import routesUsuarios from '../routes/usuario.routes'
import routesProdutos from '../routes/produtos.routes'
import routesCategorias from '../routes/categorias.routes'
import cors from 'cors'
import { Produto } from './produto';
import { Usuario } from './usuario';
import { Categoria } from './categorias';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3005';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicação está no ar', this.port);
        })
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(urlencoded({extended:true}));
        // usando cors
        this.app.use(cors());
        //
        this.app.use('/uploads', express.static(path.resolve('uploads')));
    }

    routes() {
        this.app.use('/api/usuarios', routesUsuarios);
        this.app.use('/api/produtos', routesProdutos);
        this.app.use('/api/categorias', routesCategorias);
    }

    async conectarDB() {
        try {
           await Produto.sync()
           await Usuario.sync()
           await Categoria.sync()
           console.log('CONECTADO COM SUCESSO');
          } catch (error) {
            console.error('Não foi possivel conectar ao banco de dados:', error);
          }
    }

}

export default Server;