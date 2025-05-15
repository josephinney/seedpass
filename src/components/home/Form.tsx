
'use client';

import { FormProps } from '@/types';
import { useTheme } from "@/providers/ThemeProvider";

const Form = ({ 
  seed1, 
  seed2, 
  seed3, 
  setSeed1, 
  setSeed2, 
  setSeed3, 
  handleGeneratePassword 
}: FormProps) => {
  const { theme } = useTheme();
  
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
      <h2 className={`text-xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>Enter your seeds</h2>
      
      <div className="mb-4">
        <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Service Name</label>
        <input
          type="text"
          value={seed1}
          onChange={e => setSeed1(e.target.value.trim().toLowerCase())}
          placeholder="Enter service name (e.g., Facebook)"
          className={`w-full px-3 py-2 border rounded-md ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'} focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-green-400' : 'focus:ring-green-500'}`}
        />
      </div>
      
      <div className="mb-4">
        <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Favorite Number</label>
        <input
          type="number"
          value={seed2}
          onChange={e => setSeed2(e.target.value)}
          placeholder="Enter your favorite number"
          className={`w-full px-3 py-2 border rounded-md ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'} focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-green-400' : 'focus:ring-green-500'}`}
        />
      </div>
      
      <div className="mb-6">
        <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Important Year</label>
        <input
          type="number"
          value={seed3}
          onChange={e => setSeed3(e.target.value)}
          placeholder="Enter the year of an important event"
          className={`w-full px-3 py-2 border rounded-md ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'} focus:outline-none focus:ring-2 ${theme === 'dark' ? 'focus:ring-green-400' : 'focus:ring-green-500'}`}
        />
      </div>
      
      <button
        onClick={handleGeneratePassword}
        className="w-full py-2 px-4 bg-black hover:bg-gray-800 text-green-400 font-semibold rounded-md shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Generate Password
      </button>
    </div>
  );
};

export default Form;