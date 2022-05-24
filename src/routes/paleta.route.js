import express from 'express';
import {
  findAll,
  findById,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
} from '../controllers/paleta.controller.js';

export const routes = express.Router();

routes.get('/paletas', findAll);
routes.get('/paletas/:id', findById);
routes.post('/create', createPaletaController);
routes.put('/update/:id', updatePaletaController);
routes.delete('/delete/:id', deletePaletaController);
