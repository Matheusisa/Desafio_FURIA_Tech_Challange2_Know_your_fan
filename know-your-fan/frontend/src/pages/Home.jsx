import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', form);
    // Aqui futuramente chamamos postFanData(form)
  };

  return (
    <div style={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      color: '#fff',
      padding: '30px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src="/Furia_Esports_logo.png" 
          alt="Logo FURIA" 
          style={{ width: '100px', marginBottom: '10px' }} 
        />
        <h1>Cadastro do Fã 🎮</h1>
        <p>Mostre que você é FURIA até o fim! 🐆</p>
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
          placeholder="Fale sobre seus interesses"
          value={form.interests}
          onChange={handleChange}
          rows="4"
          required
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <button 
          type="submit" 
          style={{
            backgroundColor: '#f00',
            color: '#fff',
            padding: '12px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Enviar Cadastro
        </button>
      </form>
    </div>
  );
};

// Estilo padrão dos inputs
const inputStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #333',
  backgroundColor: '#222',
  color: '#fff'
};

export default Home;