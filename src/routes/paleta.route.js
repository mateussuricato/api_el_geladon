import express from 'express';
import { readFile } from 'fs/promises';
import {
  findAll,
  findById,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
} from '../controllers/paleta.controller.js';

import { validId, validObjectBody } from '../middlewares/paleta.middleware.js';

import  swaggerUi from 'swagger-ui-express';

const json = JSON.parse(await readFile(new URL('../swagger.json', import.meta.url)));

export const routes = express.Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(json));
routes.get('/paletas', findAll);
routes.get('/paletas/:id', validId, findById);
routes.post('/create', validObjectBody, createPaletaController);
routes.put('/update/:id', validId, validObjectBody, updatePaletaController);
routes.delete('/delete/:id', validId, deletePaletaController);
