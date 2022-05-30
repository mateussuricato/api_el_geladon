import express from 'express';
import {
  findAll,
  findById,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
} from '../controllers/paleta.controller.js';

import { validId, validObjectBody } from '../middlewares/paleta.middleware.js';

export const routes = express.Router();

routes.get('/paletas', findAll);
routes.get('/paletas/:id', validId, findById);
routes.post('/create', validObjectBody, createPaletaController);
routes.put('/update/:id', validId, validObjectBody, updatePaletaController);
routes.delete('/delete/:id', validId, deletePaletaController);
