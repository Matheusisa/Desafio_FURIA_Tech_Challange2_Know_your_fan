# 👤 Know Your Fan – Challenge 2

Desafio técnico FURIA Tech – Assistente de Engenharia de Software  
📁 Projeto completo com backend, frontend e simulações de IA

---

## 🧠 Sobre o Projeto

O **Know Your Fan** é um sistema de cadastro de torcedores da FURIA, projetado para captar dados, arquivos e perfis sociais de fãs e simular uma análise via inteligência artificial.

Esse desafio explora uma experiência de onboarding com **interatividade, upload, IA, e integrações simuladas com redes sociais**.

---

## 🎯 Funcionalidades

- ✅ Formulário completo: nome, e-mail, CPF, endereço, interesses
- ✅ Upload de documentos com pré-visualização
- ✅ Simulação de análise de documentos com IA (OCR)
- ✅ Integração simulada com Firebase Storage (documentada)
- ✅ Vinculação de redes sociais (OAuth simulado com Instagram, Twitter, TikTok)
- ✅ Validação de perfis gamer com IA simulada (ex: Steam/Faceit)
- ✅ Visual refinado: tema escuro + dourado, responsivo
- ✅ Feedback visual (status, animações, alerts)

---

## 🛠️ Tecnologias Utilizadas

### 🧩 Frontend
- React.js
- `react-icons`
- CSS inline + animações
- Comunicação via `fetch`

### 🧩 Backend
- Node.js + Express
- `multer` para upload de arquivos
- Simulação de persistência e resposta JSON

---

## 📂 Estrutura de Pastas

```
know-your-fan/
├── backend/
│   ├── app.js
│   └── uploads/
├── frontend/
│   ├── public/
│   │   └── Furia_Esports_logo.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── UploadDocument.jsx
│   │   │   ├── SocialLink.jsx
│   │   │   └── ProfileValidator.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── ocr.js
│   │   │   └── profileValidator.js
│   │   ├── App.jsx
│   │   └── index.js
```

---

## 🚀 Como Rodar o Projeto

### 1. Backend

1. Acesse a pasta do backend:
   ```bash
   cd know-your-fan/backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node app.js
   ```

   O servidor estará rodando em: `http://localhost:5000`

---

### 2. Frontend

1. Acesse a pasta do frontend:
   ```bash
   cd ../frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a aplicação:
   ```bash
   npm start
   ```

   A aplicação estará disponível em: `http://localhost:3000`

---

## 🧪 Simulações de IA

### 🧾 OCR (leitura de documentos)
Após enviar o arquivo, o sistema simula uma leitura de texto e retorna um conteúdo extraído artificialmente.

### 🎮 Validação de perfil e-sports
Insira um link (ex: `https://steamcommunity.com/id/jogador123`) e o sistema simula uma análise via IA e retorna se é válido ou não.

---

## 📸 Capturas de Tela

*(Adicione imagens do formulário, upload e integração social, se necessário.)*

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins de avaliação técnica no processo seletivo da FURIA Tech.
