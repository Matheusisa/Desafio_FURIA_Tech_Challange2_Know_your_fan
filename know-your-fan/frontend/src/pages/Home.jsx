import React, { useState } from 'react';
import UploadDocument from '../components/UploadDocument';
import { postFanData } from '../services/api';
import SocialLink from '../components/SocialLink';

const Home = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    cpf: '',
    address: '',
    interests: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postFanData(form);
    if (result.success) {
      alert("Cadastro enviado com sucesso!");
      setForm({
        name: '',
        email: '',
        cpf: '',
        address: '',
        interests: ''
      });
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div style={{
      backgroundColor: '#0d0d0d',
      minHeight: '100vh',
      color: '#fff',
      padding: '30px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img 
          src="/Furia_Esports_logo.png" 
          alt="Logo FURIA" 
          style={{ width: '100px', marginBottom: '10px' }} 
        />
        <h1 style={{
          color: '#FFD700',
          letterSpacing: '1px',
          textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
        }}>Cadastro do Fã</h1>
        <p style={{ color: '#aaa' }}>Mostre que você é FURIA até o fim! 🐆</p>
      </div>

      <form 
        onSubmit={handleSubmit} 
        style={{ 
          maxWidth: '600px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '15px'
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nome completo"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={form.cpf}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="address"
          placeholder="Endereço"
          value={form.address}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="interests"
          placeholder="Seus interesses no mundo dos games"
          value={form.interests}
          onChange={handleChange}
          rows="4"
          required
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <button 
          type="submit" 
          style={buttonStyle}
        >
          Enviar Cadastro
        </button>
      </form>

      {/* Espaçamento entre formulário e upload */}
      <div style={{ height: '40px' }} />

      <UploadDocument />
      <SocialLink />

    </div>
  );
};

const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #FFD700',
  backgroundColor: '#1a1a1a',
  color: '#fff',
  fontSize: '15px',
  boxShadow: '0 0 4px rgba(255, 215, 0, 0.2)',
  width: '100%',
  boxSizing: 'border-box'
};

const buttonStyle = {
  background: 'linear-gradient(90deg, #FFD700, #FFC300)',
  color: '#000',
  padding: '12px',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
  boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
};

export default Home;
