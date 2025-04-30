import React, { useState } from 'react';
import { analyzeProfileLink } from '../services/profileValidator';

const ProfileValidator = () => {
  const [link, setLink] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleValidate = async () => {
    if (!link) return setStatus("Informe o link do perfil.");
    setLoading(true);
    setStatus("Analisando...");
    const result = await analyzeProfileLink(link);
    setStatus(result.message);
    setLoading(false);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      padding: '25px',
      boxShadow: '0 0 15px rgba(255,215,0,0.08)',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#FFD700', marginBottom: '10px' }}>Validação de Perfil Gamer</h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>
        Insira o link do seu perfil de e-sports (ex: Steam ou Faceit)
      </p>
      <input 
        type="text" 
        value={link} 
        onChange={(e) => setLink(e.target.value)} 
        placeholder="https://steamcommunity.com/id/matheusfuria"
        style={{
          padding: '10px',
          width: '100%',
          borderRadius: '8px',
          border: '1px solid #FFD700',
          backgroundColor: '#0d0d0d',
          color: '#fff',
          marginBottom: '15px'
        }}
      />
      <br />
      <button 
        onClick={handleValidate}
        disabled={loading}
        style={{
          padding: '10px 20px',
          background: loading ? '#ccc' : 'linear-gradient(90deg, #FFD700, #FFC300)',
          color: '#000',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        {loading ? 'Analisando...' : 'Validar Perfil'}
      </button>

      {status && (
        <p style={{ color: '#FFD700', marginTop: '20px', animation: 'fadeIn 1s ease-in' }}>
          {status}
        </p>
      )}
    </div>
  );
};

export default ProfileValidator;
