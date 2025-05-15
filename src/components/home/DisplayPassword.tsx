
'use client';

import { Copy } from 'lucide-react';
import { DisplayPasswordProps } from '@/types';
import { useTheme } from "@/providers/ThemeProvider";

const DisplayPassword = ({ password }: DisplayPasswordProps) => {
  const { theme } = useTheme();
  
  if (!password) return null;
  
  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };
  
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mt-6`}>
      <h2 className={`text-xl font-bold mb-4 text-center ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>Generated Password:</h2>
      <div className="flex items-center justify-between">
        <p className={`font-mono text-lg ${theme === 'dark' ? 'bg-gray-700 text-green-400' : 'bg-gray-100 text-gray-800'} p-3 rounded w-full mr-2 text-center break-all`}>{password}</p>
        <button 
          onClick={handleCopyPassword}
          className="flex items-center justify-center p-3 bg-black hover:bg-gray-800 text-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          aria-label="Copy to clipboard"
        >
          <Copy size={20} />
        </button>
      </div>
    </div>
  );
};

export default DisplayPassword;