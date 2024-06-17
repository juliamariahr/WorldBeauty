import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import clienteRoutes from './routes/clienteRoutes';
import produtoRoutes from './routes/produtoRoutes';
import consumoRoutes from './routes/consumoRoutes';

const app = express();
const port = 32832;

app.use(bodyParser.json());
app.use(cors());

app.use('/clientes', clienteRoutes);
app.use('/produtos', produtoRoutes);
app.use('/consumos', consumoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
