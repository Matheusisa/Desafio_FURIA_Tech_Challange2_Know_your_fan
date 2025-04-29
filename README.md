# 👤 Know Your Fan – Challenge 2

## 🧠 Sobre o Projeto

O **Know Your Fan** é uma aplicação desenvolvida para registrar e conhecer melhor os fãs da FURIA. O objetivo é captar dados essenciais de torcedores e permitir o envio de arquivos/documentos para simular um cadastro completo — criando uma base de dados rica e estruturada.

Este projeto foi desenvolvido como parte do processo seletivo para Assistente de Engenharia de Software da FURIA Tech.

---

## 🎯 Funcionalidades

- ✅ Formulário com campos essenciais:
  - Nome, e-mail, CPF, endereço e interesses
- ✅ Upload de documentos com preview de status
- ✅ Estilização com tema **escuro + dourado**, alinhado à identidade visual da FURIA
- ✅ Integração com backend Node.js (simulado via `multer`)
- ✅ Feedback de sucesso ao usuário após o envio

---

## 🛠️ Tecnologias Utilizadas

### 🧩 Frontend
- React.js
- CSS inline com tema FURIA
- Fetch API (integração com backend)

### 🧩 Backend
- Node.js + Express
- `multer` para upload de arquivos
- Simulação de persistência via console/logs

---

## 🚀 Instalação e Execução

### 🔧 Backend

1. Acesse a pasta `backend`:

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

### 💻 Frontend

1. Acesse a pasta `frontend`:

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

O app abrirá em `http://localhost:3000`

---

## 📂 Estrutura do Projeto

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
│   │   │   └── UploadDocument.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── index.js
```

---

## 📸 Estilo Visual

- Tema dark com dourado metálico
- Layout minimalista e centralizado
- Upload destacado logo após o formulário
- Logo da FURIA visível no topo

---

## 🤝 Contribuição

Contribuições são bem-vindas!  
Abra uma issue ou pull request para discutir melhorias ou reportar bugs.

---

## 📄 Licença

Este projeto está licenciado sob os termos da MIT License.
