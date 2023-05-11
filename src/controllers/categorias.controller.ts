import { Request, Response } from "express"
import { Categoria } from "../models/categorias";

export const getCategorias = async (req: Request, res: Response) => {

    const listCategorias = await Categoria.findAll();
    
        res.json(listCategorias);
}

export const deleteCategoria = async (req: Request, res: Response) => {

    const { id } = req.params; 

    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
        res.status(404).json({
            msg: `Não existe essa categoria com esse numero de ID: ${id}`
        })
    } else {
        await categoria.destroy();
        res.json({
            msg: `O categoria foi apagado com sucesso: ${id}`
        })
    }

}

export const putCategoria = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = req.params;
    
    const categoria = await Categoria.findByPk(id);

    if (categoria) {
        res.json(categoria)
    } else {
        res.status(404).json({
            msg: `Não existe um categoria com este ID: ${id}`
        })
    }

}

export const addCategoria = async (req: Request, res: Response) => {
    
    const {body} = req;

    try {
        
    await Categoria.create(body);

    res.json(body) 
    
    } catch (error) {
        res.status(400).json({
            msg: 'Falhou a conexão!',
            error
        })
    }

}


