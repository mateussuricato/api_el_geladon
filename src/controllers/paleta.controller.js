import {
  findAllService,
  findByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
} from '../services/paleta.service.js';

export const findAll = (req, res) => {
  const paletas = findAllService();

  if (paletas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }

  res.send(paletas);
};

export const findById = (req, res) => {
  const id = +req.params.id;
  if (!id) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }
  const paletas = findByIdService(id);
  res.send(paletas);
};

export const createPaletaController = (req, res) => {
  const paleta = req.body;
  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    res.status(400).send({
      mensagem:
        'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!',
    });
  }
  const newPaleta = createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

export const updatePaletaController = (req, res) => {
  const idParam = +req.params.id;
  if (!idParam) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  const paletaEdit = req.body;

  if (
    !paletaEdit ||
    !paletaEdit.sabor ||
    !paletaEdit.descricao ||
    !paletaEdit.foto ||
    !paletaEdit.preco
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar a paleta!',
    });
  }

  const updatedPaleta = updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

export const deletePaletaController = (req, res) => {
  const idParam = +req.params.id;
  if (!idParam) {
    return res.status(400).send({ message: 'Paleta não encontrada!' });
  }
  deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};
