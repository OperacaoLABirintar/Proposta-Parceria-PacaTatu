import React from 'react';

export const LabirintarLogo = ({ className, withTagline = false }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center">
        <svg width="60" height="60" viewBox="0 0 100 100" className="mr-2 h-auto" style={{width: 'auto', height: '100%'}}>
            <path d="M50 10 A 40 40 0 1 1 10 50" fill="none" stroke="#ffa400" strokeWidth="8"/>
            <path d="M50 20 A 30 30 0 1 0 20 50" fill="none" stroke="#ffa400" strokeWidth="8"/>
            <path d="M50 30 A 20 20 0 1 1 30 50" fill="none" stroke="#ffa400" strokeWidth="8"/>
            <path d="M50 40 A 10 10 0 1 0 40 50" fill="none" stroke="#ffa400" strokeWidth="8"/>
            <path d="M50 10 V 90" fill="none" stroke="#ffa400" strokeWidth="8"/>
            <path d="M10 50 H 90" fill="none" stroke="#ffa400" strokeWidth="8"/>
            <circle cx="50" cy="50" r="5" fill="#ffa400" />
        </svg>
        <div className="font-slab text-4xl tracking-wide">
          <span style={{ color: '#ff595a' }}>LAB</span>
          <span style={{ color: '#ffa400' }}>IRINTAR</span>
        </div>
      </div>
      {withTagline && <p className="text-sm font-sans mt-1 text-gray-600">Lugar de Fazer e Ser</p>}
    </div>
  );
};
