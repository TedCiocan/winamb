import React from 'react';

export default function Logo({ size = 'medium', showText = true, className = '' }) {
  const sizes = {
    small: { icon: '24px', text: '16px' },
    medium: { icon: '32px', text: '20px' },
    large: { icon: '48px', text: '28px' },
    xl: { icon: '64px', text: '36px' }
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Custom SVG Logo */}
      <svg 
        width={currentSize.icon} 
        height={currentSize.icon} 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon"
      >
        {/* Background Circle */}
        <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" stroke="#1ed760" strokeWidth="2"/>
        
        {/* Music Note */}
        <path 
          d="M35 25 L65 20 L65 60 C65 67 59 72 52 72 C45 72 40 67 40 60 C40 53 45 48 52 48 C55 48 58 49 60 51 L60 30 L40 34 L40 70 C40 77 34 82 27 82 C20 82 15 77 15 70 C15 63 20 58 27 58 C30 58 33 59 35 61 Z" 
          fill="white" 
        />
        
        {/* Sound waves */}
        <path d="M75 35 Q80 40 80 50 Q80 60 75 65" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M80 30 Q87 37 87 50 Q87 63 80 70" stroke="white" strokeWidth="2" fill="none"/>
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1DB954"/>
            <stop offset="100%" stopColor="#1ed760"/>
          </linearGradient>
        </defs>
      </svg>
      
      {/* Brand Text */}
      {showText && (
        <span 
          className="logo-text" 
          style={{ 
            fontSize: currentSize.text, 
            fontWeight: '800',
            background: 'linear-gradient(135deg, #1DB954, #1ed760)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          WINAMB
        </span>
      )}
    </div>
  );
}
