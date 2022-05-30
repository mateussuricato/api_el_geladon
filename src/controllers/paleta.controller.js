import mongoose from 'mongoose';
import {
  findAllService,
  findByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
} from '../services/paleta.service.js';

export const findAll = async (req, res) => {
  const paletas = await findAllService();

  if (paletas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }

  res.send(paletas);
};

export const findById = async (req, res) => {
  const id = req.params.id;

  const chosenPaletas = await findByIdService(id);
  if (!chosenPaletas) {
    return res.status(400).send({ message: 'Paleta não encontrada!' });
  }
  res.send(chosenPaletas);
};

export const createPaletaController = async (req, res) => {
  const paleta = req.body;
  await createPaletaService(paleta);
};

export const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const paletaEdit = req.body;
  await updatePaletaService(idParam, paletaEdit);
};

export const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  await deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};
