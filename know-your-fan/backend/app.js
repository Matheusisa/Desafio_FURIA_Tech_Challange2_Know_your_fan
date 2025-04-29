const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Rota simples para testar
app.get('/', (req, res) => {
  res.send('API Know Your Fan funcionando! 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

app.post('/api/fans', (req, res) => {
  console.log("Cadastro recebido:", req.body);
  res.json({ success: true, message: "Fã cadastrado com sucesso!" });
});
