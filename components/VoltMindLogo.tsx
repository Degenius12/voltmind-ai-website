import React from 'react';

export default function VoltMindLogo({ size = 32, className = '' }) {
  return (
    <div className="relative flex items-center justify-center w-8 h-8">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        {/* Bold V shape */}
        <path 
          d="M8 8L20 32L32 8" 
          stroke="url(#voltGradient)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Electric arc/spark at the bottom */}
        <path 
          d="M18 28C19 30 21 30 22 28" 
          stroke="#eab308" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <path 
          d="M17 26C18.5 28.5 21.5 28.5 23 26" 
          stroke="#fbbf24" 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        
        {/* Small sparks */}
        <circle cx="16" cy="24" r="1" fill="#eab308"/>
        <circle cx="24" cy="24" r="1" fill="#eab308"/>
        
        <defs>
          <linearGradient id="voltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
