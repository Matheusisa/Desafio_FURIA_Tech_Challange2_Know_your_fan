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

        // Simula leitura do documento pelo "OCR"
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
    <form onSubmit={handleUpload} style={{ marginTop: '20px' }}>
      <label style={{ color: '#FFD700' }}>
        Enviar documento:
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} 
          style={{ display: 'block', marginTop: '10px', color: '#fff' }}
        />
      </label>

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
        <p style={{ marginTop: '10px', color: '#FFD700' }}>
          <strong>Resultado OCR (simulado):</strong><br />
          {ocrResult}
        </p>
      )}
    </form>
  );
};
// Em um ambiente real, esta função enviaria o arquivo em base64    
// para a Google Vision API, e retornaria os textos extraídos
// Simulação de retorno do OCR
export default UploadDocument;
