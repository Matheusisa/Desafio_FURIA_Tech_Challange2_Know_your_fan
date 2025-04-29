const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do multer para salvar arquivos localmente na pasta /uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

// Criar pasta uploads se não existir (opcional em produção)
const fs = require('fs');
if (!fs.existsSync('./uploads')) fs.mkdirSync('./uploads');

// Rota para receber o arquivo
app.post('/api/upload', upload.single('document'), (req, res) => {
  console.log("Arquivo recebido:", req.file);
  res.json({ success: true, fileName: req.file.filename });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
