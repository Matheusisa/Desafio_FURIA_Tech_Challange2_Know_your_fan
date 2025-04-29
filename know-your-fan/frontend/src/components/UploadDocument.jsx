import React, { useState } from 'react';

const UploadDocument = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

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
    </form>
  );
};

export default UploadDocument;
