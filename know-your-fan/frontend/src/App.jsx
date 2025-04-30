import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      {/* Menu de navegação */}
      <nav style={navStyle}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            ...linkStyle,
            borderBottom: isActive ? '2px solid #FFD700' : 'none'
          })}
        >
          Cadastro
        </NavLink>

        <NavLink 
          to="/dashboard" 
          style={({ isActive }) => ({
            ...linkStyle,
            borderBottom: isActive ? '2px solid #FFD700' : 'none'
          })}
        >
          Dashboard
        </NavLink>
      </nav>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

// Estilos base
const navStyle = {
  backgroundColor: '#1a1a1a',
  padding: '15px 30px',
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(255,215,0,0.05)'
};

const linkStyle = {
  color: '#FFD700',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  paddingBottom: '4px',
  transition: 'border-bottom 0.3s ease'
};

export default App;
