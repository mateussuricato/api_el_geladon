import {} from 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { routes } from './src/routes/paleta.route.js';
import { connectToDatabase } from './src/database/database.js';
const port = process.env.PORT || 3004;

const app = express();
connectToDatabase();
app.use(express.json());
app.use(cors());
app.use('', routes);

app.listen(port, (req, res) => {
  console.log(`Está rodando na porta ${port}`);
});
