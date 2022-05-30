import { paletas } from '../models/paletas.js';

export const findAllService = async () => {
  const paleta = await paletas.find();
  return paleta;
};

export const findByIdService = async (id) => {
  const paleta = await paletas.findById(id);
  return paleta;
};

export const createPaletaService = async (newPaleta) => {
  const paletaCreated = await paletas.create(newPaleta);
  return paletaCreated;
};

export const updatePaletaService = async (id, paletaEdited) => {
  const paletaUpdate = await paletas.findByIdAndUpdate(id, paletaEdited);
  return paletaUpdate;
};

export const deletePaletaService = async (id) => {
  const del = await paletas.findByIdAndDelete(id);
  return del;
};
