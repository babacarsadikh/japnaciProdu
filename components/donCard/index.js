import React from 'react';

const DonCard = ({ title, iconSrc, onClick }) => {
  return (
    <div
    onClick={onClick} // Ajoutez l'événement onClick

      style={{
        width: '140px',
        height: '140px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        textAlign: 'center',
        margin: '15px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#eae8e9',
        marginBottom: "30px"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)'; // Appliquez le style au survol
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'; // Réinitialisez le style lorsque la souris quitte la carte
      }}
    
    >
      <img
        src={iconSrc}
        alt={`${title} Icon`}
        style={{ width: '80px', height: '80px', marginBottom: '14px' }}
      />
      <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{title}</span>
    </div>
  );
};

export default DonCard;
