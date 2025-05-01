const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Pasta para uploads
if (!fs.existsSync('./uploads')) fs.mkdirSync('./uploads');
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// 📁 Rota: Upload de arquivo
app.post('/api/upload', upload.single('document'), (req, res) => {
  console.log("Arquivo recebido:", req.file);
  res.json({ success: true, fileName: req.file.filename });
});

// ✅ Rota: Cadastro de fã (formulário)
app.post('/api/fans', (req, res) => {
  const data = req.body;
  console.log("Dados recebidos no cadastro:", data);
  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
