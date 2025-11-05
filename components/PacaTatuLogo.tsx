
import React from 'react';

interface PacaTatuLogoProps {
  className?: string;
}

export const PacaTatuLogo: React.FC<PacaTatuLogoProps> = ({ className }) => {
  return (
    <div className={`font-slab text-3xl text-brand-chocolate ${className}`}>
        Paca Tatu
    </div>
  );
};
