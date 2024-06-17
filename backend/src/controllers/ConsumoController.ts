import { Request, Response } from 'express';
import { Consumo } from '../models/Consumo';

let consumos: Consumo[] = [];

export const getConsumos = (req: Request, res: Response) => {
  res.status(200).json(consumos);
};

export const getConsumoById = (req: Request, res: Response) => {
  const { id } = req.params;
  const consumo = consumos.find(c => c.id === parseInt(id));
  if (consumo) {
    res.status(200).json(consumo);
  } else {
    res.status(404).json({ message: 'Consumo não encontrado' });
  }
};

export const createConsumo = (req: Request, res: Response) => {
  const newConsumo: Consumo = req.body;
  newConsumo.id = consumos.length + 1;
  consumos.push(newConsumo);
  res.status(201).json(newConsumo);
};

export const updateConsumo = (req: Request, res: Response) => {
  const { id } = req.params;
  const consumoIndex = consumos.findIndex(c => c.id === parseInt(id));
  if (consumoIndex !== -1) {
    consumos[consumoIndex] = { ...req.body, id: parseInt(id) };
    res.status(200).json(consumos[consumoIndex]);
  } else {
    res.status(404).json({ message: 'Consumo não encontrado' });
  }
};

export const deleteConsumo = (req: Request, res: Response) => {
  const { id } = req.params;
  consumos = consumos.filter(c => c.id !== parseInt(id));
  res.status(200).json({ message: 'Consumo excluído com sucesso' });
};
