import React from 'react';

export default function VoltMindLogo({ size = 32, className = '' }) {
  return (
    <div className="relative flex items-center justify-center w-8 h-8">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        {/* Brain-like shape */}
        <path 
          d="M16 4C12 4 9 7 9 11C9 12.5 9.5 13.8 10.2 15C9.2 16 8.7 17.3 8.7 18.7C8.7 22.7 12 26 16 26C20 26 23.3 22.7 23.3 18.7C23.3 17.3 22.8 16 21.8 15C22.5 13.8 23 12.5 23 11C23 7 20 4 16 4Z"
          stroke="#14b8a6" 
          strokeWidth="1.5" 
          fill="#14b8a6" 
          fillOpacity="0.1"
        />
        
        {/* Large prominent lightning bolt */}
        <path 
          d="M14 9L18 5L16 5L20 2L12 14L15 14L14 9Z" 
          fill="#eab308"
          stroke="#ca8a04"
          strokeWidth="0.3"
        />
        
        {/* Lightning glow effect */}
        <path 
          d="M14 9L18 5L16 5L20 2L12 14L15 14L14 9Z" 
          fill="#fbbf24"
          opacity="0.6"
          transform="scale(1.1) translate(-0.8, -0.8)"
        />
      </svg>
    </div>
  );
}
