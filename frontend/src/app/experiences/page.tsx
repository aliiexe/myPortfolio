'use client';

import { useState, useEffect } from 'react';
import { Construction } from 'lucide-react';

export default function Experiences() {
  const [dotCount, setDotCount] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount(prev => prev < 3 ? prev + 1 : 1);
    }, 600);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex items-center justify-center w-full min-h-screen ">
      <div className="text-center max-w-lg w-full px-6">
        <div 
          className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-zinc-700 text-yellow-400"
          style={{
            animation: "pulse 2s infinite ease-in-out"
          }}
        >
          <Construction size={40} />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">Experiences</h1>
        
        <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
        
        <h2 className="text-2xl font-medium text-zinc-300 mb-3">
          Under Construction
        </h2>
        
        <p className="text-zinc-400 text-lg mb-4">
          This page is currently being developed{'.'.repeat(dotCount)}
        </p>
        
        <style jsx>{`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}</style>
      </div>
    </div>
  );
}