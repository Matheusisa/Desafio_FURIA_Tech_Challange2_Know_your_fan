import React, { useState } from 'react';
import { analyzeDocument } from '../services/ocr';

const UploadDocument = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');
  const [ocrResult, setOcrResult] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setStatus("Selecione um arquivo.");

    const formData = new FormData();
    formData.append('document', file);

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Arquivo enviado com sucesso! ✅");

        const ocr = await analyzeDocument(file);
        setOcrResult(ocr.text);
      } else {
        setStatus("Erro ao enviar o arquivo.");
      }
    } catch (error) {
      setStatus("Erro ao conectar com o servidor.");
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <form 
        onSubmit={handleUpload} 
        style={{ 
          marginTop: '20px',
          maxWidth: '600px',
          marginInline: 'auto',
          textAlign: 'center'
        }}
      >
        <label style={{ color: '#FFD700' }}>
          Enviar documento:
        </label>

        {/* Botão estilizado para escolher arquivo */}
        <label 
          htmlFor="fileUpload" 
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            background: '#222',
            border: '1px solid #FFD700',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#FFD700',
            marginTop: '10px'
          }}
        >
          📎 Escolher arquivo
        </label>
        <input 
          id="fileUpload"
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} 
          style={{ display: 'none' }}
        />

        <p style={{ color: '#aaa', marginTop: '5px' }}>
          {file?.name || "Nenhum arquivo selecionado"}
        </p>

        <button type="submit" style={{
          marginTop: '10px',
          padding: '10px 20px',
          background: 'linear-gradient(90deg, #FFD700, #FFC300)',
          color: '#000',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Enviar Arquivo
        </button>

        {status && <p style={{ marginTop: '10px', color: '#fff' }}>{status}</p>}

        {ocrResult && (
          <p 
            style={{ 
              marginTop: '10px', 
              color: '#FFD700',
              animation: 'fadeIn 1s ease-in'
            }}
          >
            <strong>Resultado OCR (simulado):</strong><br />
            {ocrResult}
          </p>
        )}
      </form>
    </>
  );
};

export default UploadDocument;
