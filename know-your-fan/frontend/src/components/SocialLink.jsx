import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaTiktok, FaCheckCircle } from 'react-icons/fa';

const SocialLink = () => {
  const [linked, setLinked] = useState({
    instagram: false,
    twitter: false,
    tiktok: false
  });

  const handleLink = (platform) => {
    setLinked(prev => ({ ...prev, [platform]: true }));
  };

  const getButtonStyle = (platform) => ({
    background: linked[platform] ? '#28a745' : '#FFD700',
    color: linked[platform] ? '#fff' : '#000',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 18px',
    margin: '10px',
    cursor: linked[platform] ? 'default' : 'pointer',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    minWidth: '230px',
    boxShadow: '0 0 8px rgba(255,215,0,0.2)'
  });

  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      padding: '30px',
      maxWidth: '700px',
      margin: '40px auto 60px auto',
      boxShadow: '0 0 15px rgba(255,215,0,0.08)'
    }}>
      <h2 style={{ 
        color: '#FFD700', 
        marginBottom: '10px',
        textAlign: 'center',
        textShadow: '0 0 8px rgba(255,215,0,0.3)'
      }}>
        Vincule suas redes sociais
      </h2>
      <p style={{ color: '#aaa', textAlign: 'center', marginBottom: '30px' }}>
        Clique nos botões abaixo para simular o vínculo com suas redes sociais favoritas.
      </p>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap' 
      }}>
        <button 
          style={getButtonStyle('instagram')}
          onClick={() => handleLink('instagram')}
          disabled={linked.instagram}
        >
          <FaInstagram /> {linked.instagram ? 'Instagram vinculado' : 'Vincular Instagram'} 
          {linked.instagram && <FaCheckCircle />}
        </button>

        <button 
          style={getButtonStyle('twitter')}
          onClick={() => handleLink('twitter')}
          disabled={linked.twitter}
        >
          <FaTwitter /> {linked.twitter ? 'Twitter vinculado' : 'Vincular Twitter'} 
          {linked.twitter && <FaCheckCircle />}
        </button>

        <button 
          style={getButtonStyle('tiktok')}
          onClick={() => handleLink('tiktok')}
          disabled={linked.tiktok}
        >
          <FaTiktok /> {linked.tiktok ? 'TikTok vinculado' : 'Vincular TikTok'} 
          {linked.tiktok && <FaCheckCircle />}
        </button>
      </div>
    </div>
  );
};

export default SocialLink;
