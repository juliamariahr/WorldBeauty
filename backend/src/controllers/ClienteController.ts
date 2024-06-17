import { Request, Response } from 'express';
import { Cliente } from '../models/Cliente';

let clientes: Cliente[] = [];

export const getClientes = (req: Request, res: Response) => {
  res.status(200).json(clientes);
};

export const getClienteById = (req: Request, res: Response) => {
  const { id } = req.params;
  const cliente = clientes.find(c => c.id === parseInt(id));
  if (cliente) {
    res.status(200).json(cliente);
  } else {
    res.status(404).json({ message: 'Cliente não encontrado' });
  }
};

export const createCliente = (req: Request, res: Response) => {
  const newCliente: Cliente = req.body;
  newCliente.id = clientes.length + 1;
  clientes.push(newCliente);
  res.status(201).json(newCliente);
};

export const updateCliente = (req: Request, res: Response) => {
  const { id } = req.params;
  const clienteIndex = clientes.findIndex(c => c.id === parseInt(id));
  if (clienteIndex !== -1) {
    clientes[clienteIndex] = { ...req.body, id: parseInt(id) }; // Mantém o ID do cliente ao atualizar
    res.status(200).json(clientes[clienteIndex]);
  } else {
    res.status(404).json({ message: 'Cliente não encontrado' });
  }
};

export const deleteCliente = (req: Request, res: Response) => {
  const { id } = req.params;
  clientes = clientes.filter(c => c.id !== parseInt(id));
  res.status(200).json({ message: 'Cliente excluído com sucesso' });
};
