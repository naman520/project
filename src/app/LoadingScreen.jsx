'use client'
import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${!isLoading ? 'loading-screen--hidden' : ''}`}>
      <div className="loading-spinner"></div>
      <div className="flex items-center space-x-2 animate-loading-pulse">
        <Zap className="w-8 h-8 text-purple-500" />
        <h2 className="text-2xl font-bold gradient-text">ProSign</h2>
      </div>
    </div>
  );
}