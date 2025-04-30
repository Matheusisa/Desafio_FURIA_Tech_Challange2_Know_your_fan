import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const fakeData = [
  { name: 'Matheus', email: 'matheus@furia.gg', interesses: 'CS:GO' },
  { name: 'Gaby', email: 'gaby@furia.gg', interesses: 'Valorant' },
  { name: 'Isa', email: 'Isadora@furia.gg', interesses: 'CS:GO' },
  { name: 'Ananda', email: 'ananda@furia.gg', interesses: 'League of Legends' },
  { name: 'Arthur', email: 'Arthur@furia.gg', interesses: 'CS:GO' },
];

// Contador de interesses
const countInteresses = () => {
  const count = {};
  fakeData.forEach(user => {
    const key = user.interesses;
    count[key] = (count[key] || 0) + 1;
  });
  return Object.entries(count).map(([name, value]) => ({ name, value }));
};

const Dashboard = () => {
  return (
    <div style={{
      backgroundColor: '#0d0d0d',
      minHeight: '100vh',
      padding: '30px',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        color: '#FFD700',
        textAlign: 'center',
        marginBottom: '20px',
        textShadow: '0 0 8px rgba(255,215,0,0.3)'
      }}>
        Dashboard de Fãs Know Your Fan 🐆
      </h1>

      {/* Estatísticas */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        <StatBox label="Total de Cadastros" value={fakeData.length} />
        <StatBox label="Uploads de Documento" value={4} />
        <StatBox label="Perfis Válidos" value={3} />
      </div>

      {/* Tabela */}
      <div style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
        <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Fãs Cadastrados</h3>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          background: '#1a1a1a',
          color: '#fff',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <thead>
            <tr>
              <th style={thStyle}>Nome</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Interesses</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((user, index) => (
              <tr key={index}>
                <td style={tdStyle}>{user.name}</td>
                <td style={tdStyle}>{user.email}</td>
                <td style={tdStyle}>{user.interesses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Gráfico de interesses */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3 style={{ color: '#FFD700', marginBottom: '10px' }}>Interesses Mais Frequentes</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={countInteresses()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#FFD700" />
            <YAxis stroke="#FFD700" />
            <Tooltip />
            <Bar dataKey="value" fill="#FFD700" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const StatBox = ({ label, value }) => (
  <div style={{
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '12px',
    minWidth: '180px',
    textAlign: 'center',
    boxShadow: '0 0 8px rgba(255,215,0,0.15)'
  }}>
    <h2 style={{ color: '#FFD700', margin: 0 }}>{value}</h2>
    <p style={{ color: '#aaa', marginTop: '5px' }}>{label}</p>
  </div>
);

const thStyle = {
  padding: '12px',
  backgroundColor: '#FFD700',
  color: '#000',
  textAlign: 'left'
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #333'
};

export default Dashboard;
