import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

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
    padding: '10px 15px',
    margin: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2 style={{ color: '#FFD700', marginBottom: '10px' }}>
        Vincule suas redes sociais
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          style={getButtonStyle('instagram')}
          onClick={() => handleLink('instagram')}
          disabled={linked.instagram}
        >
          <FaInstagram /> {linked.instagram ? 'Instagram vinculado ✅' : 'Vincular Instagram'}
        </button>

        <button 
          style={getButtonStyle('twitter')}
          onClick={() => handleLink('twitter')}
          disabled={linked.twitter}
        >
          <FaTwitter /> {linked.twitter ? 'Twitter vinculado ✅' : 'Vincular Twitter'}
        </button>

        <button 
          style={getButtonStyle('tiktok')}
          onClick={() => handleLink('tiktok')}
          disabled={linked.tiktok}
        >
          <FaTiktok /> {linked.tiktok ? 'TikTok vinculado ✅' : 'Vincular TikTok'}
        </button>
      </div>
    </div>
  );
};

export default SocialLink;
