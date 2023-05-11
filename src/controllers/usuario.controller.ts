import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { Usuario } from "../models/usuario";
import jwt from 'jsonwebtoken'

export const getUsuarios = async (req: Request, res: Response) => {

    const listUsuarios = await Usuario.findAll();
    
        res.json(listUsuarios);
}

export const deleteUsuario = async (req: Request, res: Response) => {

    const { id } = req.params; 

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        res.status(404).json({
            msg: `Não existe essa categoria com esse numero de ID: ${id}`
        })
    } else {
        await usuario.destroy();
        res.json({
            msg: `O categoria foi apagado com sucesso: ${id}`
        })
    }
}



export const newUser = async (req: Request, res: Response) => {
    
    const {nome, email , senha} = req.body;

    //VALIDAÇÕES
    const usuario = await Usuario.findOne({ where: {email: email}});
    if (usuario) {
       return res.status(400).json({
            msg: `Existe um usuário cadastrado com esse email ${email}`
        })
    }

    const hashSenha = await bcrypt.hash(senha, 10);

    try {
        // SALVAR USUARIO NA BASE DE DADOS
        await Usuario.create({
            nome: nome,
            email: email,
            senha: senha,
            senhaCript: hashSenha
        })
    
        res.json({
            msg: `Usuario ${email} criado com sucesso!`,
            usuario: req.body
        })    
    } catch (error) {
        res.status(400).json({
            msg: 'Falhou a conexão!',
            error
        })
    }

}

export const loginUser = async (req: Request, res: Response) => {
    
    const {nome, email , senha} = req.body;

    // VALIDAÇÔES SE EXISTE O USUARIO
    const usuario:any = await Usuario.findOne({ where: {email: email}});

    if (!usuario) {
        return res.status(400).json({
            msg: `Não existe esse usuario ${email} na base de dados! `
        })
    }

    // VALIDAMOS A SENHA
    const senhaValida = await bcrypt.compare(senha, usuario.senhaCript )
    if (!senhaValida) {
        return res.status(400).json({
            msg: `Senha incorreta ${senha}! `
        })
    }

    // GERAR O TOKEN
    const token = jwt.sign({
        email: email
    }, process.env.SECRET_KEY || 'higorzica123')

    res.json({token});

}


