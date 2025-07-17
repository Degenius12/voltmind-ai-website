import React from 'react';

export default function VoltMindLogo({ size = 32, className = '' }) {
  return (
    <div className="relative flex items-center justify-center w-8 h-8">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        {/* Hexagonal mind shape */}
        <path 
          d="M20 4L32 12L32 28L20 36L8 28L8 12L20 4Z" 
          fill="url(#mindGradient)" 
          stroke="#0d9488" 
          strokeWidth="1.5"
        />
        
        {/* Circuit lines */}
        <path d="M15 15h10M12 20h16M15 25h10" stroke="#eab308" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="15" cy="15" r="1.5" fill="#eab308"/>
        <circle cx="25" cy="15" r="1.5" fill="#eab308"/>
        <circle cx="20" cy="20" r="2" fill="#fbbf24"/>
        <circle cx="15" cy="25" r="1.5" fill="#eab308"/>
        <circle cx="25" cy="25" r="1.5" fill="#eab308"/>
        
        <defs>
          <linearGradient id="mindGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
