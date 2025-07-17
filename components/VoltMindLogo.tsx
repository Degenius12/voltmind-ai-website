import React from 'react';

export default function VoltMindLogo({ size = 32, className = '' }) {
  return (
    <div className="relative flex items-center justify-center w-8 h-8">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#14b8a6" strokeWidth="2" fill="none"/>
        <path d="M14 12L18 8L16 8L20 4L12 14L14 14L14 12Z" fill="#eab308"/>
      </svg>
    </div>
  );
}
