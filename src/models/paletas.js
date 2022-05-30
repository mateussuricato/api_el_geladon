import mongoose from 'mongoose';

const paletaSchema = new mongoose.Schema({
  sabor: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
  preco: {
    type: Number,
    require: true,
  },
});

export const paletas = mongoose.model('paletas', paletaSchema)
