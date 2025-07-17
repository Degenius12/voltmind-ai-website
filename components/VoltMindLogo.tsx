import React from 'react';

export default function VoltMindLogo({ size = 32, className = '' }) {
  return (
    <div className="relative flex items-center justify-center w-8 h-8">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        {/* AI Chip outline */}
        <rect 
          x="10" y="10" width="20" height="20" 
          rx="4" 
          fill="url(#chipGradient)" 
          stroke="#0d9488" 
          strokeWidth="1.5"
        />
        
        {/* Chip pins/connectors */}
        <rect x="6" y="14" width="4" height="2" fill="#0d9488"/>
        <rect x="6" y="18" width="4" height="2" fill="#0d9488"/>
        <rect x="6" y="22" width="4" height="2" fill="#0d9488"/>
        <rect x="30" y="14" width="4" height="2" fill="#0d9488"/>
        <rect x="30" y="18" width="4" height="2" fill="#0d9488"/>
        <rect x="30" y="22" width="4" height="2" fill="#0d9488"/>
        
        {/* Lightning bolt in center */}
        <path 
          d="M18 14L22 12L20.5 12L24 10L16 22L19 22L18 14Z" 
          fill="#eab308"
          stroke="#ca8a04"
          strokeWidth="0.5"
        />
        
        {/* Subtle circuit traces */}
        <path d="M12 16h3M25 16h3M12 24h3M25 24h3" stroke="#14b8a6" strokeWidth="1" opacity="0.6"/>
        
        <defs>
          <linearGradient id="chipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#134e4a" />
            <stop offset="50%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
