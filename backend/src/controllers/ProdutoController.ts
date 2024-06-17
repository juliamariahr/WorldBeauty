import { Request, Response } from 'express';
import { Produto } from '../models/Produto';

let produtos: Produto[] = [];

export const getProdutos = (req: Request, res: Response) => {
  res.status(200).json(produtos);
};

export const getProdutoById = (req: Request, res: Response) => {
  const { id } = req.params;
  const produto = produtos.find(p => p.id === parseInt(id));
  if (produto) {
    res.status(200).json(produto);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
};

export const createProduto = (req: Request, res: Response) => {
  const newProduto: Produto = req.body;
  newProduto.id = produtos.length + 1; // Atribui um ID baseado no tamanho atual do array
  produtos.push(newProduto);
  res.status(201).json(newProduto);
};

export const updateProduto = (req: Request, res: Response) => {
  const { id } = req.params;
  const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));
  if (produtoIndex !== -1) {
    produtos[produtoIndex] = { ...req.body, id: parseInt(id) }; // Mantém o ID do produto ao atualizar
    res.status(200).json(produtos[produtoIndex]);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
};

export const deleteProduto = (req: Request, res: Response) => {
  const { id } = req.params;
  produtos = produtos.filter(p => p.id !== parseInt(id));
  res.status(200).json({ message: 'Produto excluído com sucesso' });
};
