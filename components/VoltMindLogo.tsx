import React from 'react';

const VoltMindLogo = ({ size = 32, className = '' }) => {
  return (
    <div className={elative flex items-center justify-center w-8 h-8 }>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Brain outline */}
        <path
          d="M32 8C24 8 18 14 18 22C18 25 19 27.5 20.5 29.5C19 31 18 33.5 18 36C18 44 24 50 32 50C40 50 46 44 46 36C46 33.5 45 31 43.5 29.5C45 27.5 46 25 46 22C46 14 40 8 32 8Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-white"
        />
        
        {/* Brain details */}
        <path
          d="M25 20C26 18 28 17 30 18M34 18C36 17 38 18 39 20M28 25C29 24 31 24 32 25M32 25C33 24 35 24 36 25M26 32C27 31 29 31 30 32M34 32C35 31 37 31 38 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-white opacity-70"
        />
        
        {/* Lightning bolt */}
        <path
          d="M30 28L34 22L31 22L35 16L29 24L32 24L30 28Z"
          fill="currentColor"
          className="text-yellow-400"
        />
        
        {/* Subtle glow effect */}
        <circle
          cx="32"
          cy="29"
          r="20"
          fill="url(#brainGlow)"
          opacity="0.1"
        />
        
        <defs>
          <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default VoltMindLogo;
