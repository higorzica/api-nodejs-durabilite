import { Request, Response } from "express"
import { Produto } from "../models/produto"
import path from 'path'
import sequelize from "../db/connection";

export const getProdutos = async (req: Request, res: Response) => {

    const listProdutos = await Produto.findAll();
    
        res.json(listProdutos);
}

export const postProduto = async (req: Request, res: Response) => {

    const { nome, preco, categoria, cor, descricao, status } = req.body;

    if (!nome) {
        return res.status(422).json({
            msg: `O campo nome é obrigatório `
        })
    }

    if (!preco) {
        return res.status(422).json({
            msg: `O campo nome é obrigatório `
        })
    }

    if (!categoria) {
        return res.status(422).json({
            msg: `O campo nome é obrigatório `
        })
    }

    try {
        // SALVAR USUARIO NA BASE DE DADOS
      const produto =  await Produto.create({
            nome: nome,
            preco: preco,
            categoria: categoria,
            cor: cor,
            descricao: descricao,
            imagem: req.file?.path,
            status: status
        })
        await produto.save();
            res.status(201).json({
                msg: `Produto ${nome} criado com sucesso!`,
                produto
            })    
        } catch (error) {
            res.status(500).json({
                msg: 'Falhou ao tentar cadastrar o produto!',
                error
            })
        }

}

export const getProduto = async (req: Request, res: Response) => {

    const { id } = req.params;

    const produtoUm = await Produto.findByPk(id);

    if (produtoUm) {
        res.json(produtoUm)
    } else {
        res.status(404).json({
            msg: `Não existe esse produto com esse numero de ID: ${id}`
        })
    }
}

export const deleteProduto = async (req: Request, res: Response) => {

    const { id } = req.params; 

    const produto = await Produto.findByPk(id);

    if (!produto) {
        res.status(404).json({
            msg: `Não existe esse produto com esse numero de ID: ${id}`
        })
    } else {
        await produto.destroy();
        res.json({
            msg: `O produto foi apagado com sucesso: ${id}`
        })
    }

}

export const putProduto = async (req: Request, res: Response) => {
    const { nome, preco, categoria, cor, descricao, status } = req.body;
    const { id } = req.params;
    
    const produto = await Produto.findByPk(id);

    if (produto) {
        const produto = await Produto.update({nome, preco, categoria, cor, descricao, status}, {where: {id}})
        res.json(produto)
    } else {
        res.status(404).json({
            msg: `Não existe um produto com este ID: ${id}`
        })
    }

}

