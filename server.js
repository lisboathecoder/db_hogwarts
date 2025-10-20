// server.js (na raiz)
import express from "express";
import dotenv from "dotenv";
import bruxosRoutes from "./src/routes/bruxosRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({ 
    message: '🏰 API de Hogwarts - MVC Edition',
    endpoints: {
      listar: 'GET /bruxos',
      buscar: 'GET /bruxos/:id',
      criar: 'POST /bruxos',
      atualizar: 'PUT /bruxos/:id',
      deletar: 'DELETE /bruxos/:id'
    }
  });
});

app.use('/bruxos', bruxosRoutes);

app.listen(serverPort, () => {
  console.log(`🪄 API aberta em http://localhost:${serverPort}`);
});