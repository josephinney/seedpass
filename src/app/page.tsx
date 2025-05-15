'use client';

import { useState } from 'react';
import Form from '@/components/home/Form';
import DisplayPassword from '@/components/home/DisplayPassword';
import MarketingSection from '@/components/marketing/MarketingSection';
import { generatePassword } from '@/utils/passwordGenerator';
import { useTheme } from '@/providers/ThemeProvider';

export default function Home() {

  const {theme} = useTheme()

  const [seed1, setSeed1] = useState('');
  const [seed2, setSeed2] = useState('');
  const [seed3, setSeed3] = useState('');
  const [password, setPassword] = useState('');
  
  const handleGeneratePassword = () => {
    if (!seed1 || !seed2 || !seed3) {
      alert('Please enter all seeds!');
      return;
    }
    
    setPassword(generatePassword(seed1, seed2, seed3));
  };
  
  return (
    <div className={`${
      theme === 'dark' ? '' : ''
    }`}>
      <div className="w-full max-w-md mx-auto px-4">
        <Form
          seed1={seed1}
          seed2={seed2}
          seed3={seed3}
          setSeed1={setSeed1}
          setSeed2={setSeed2}
          setSeed3={setSeed3}
          handleGeneratePassword={handleGeneratePassword}
        />
        
        <DisplayPassword password={password} />
      </div>
      
      <MarketingSection />
    </div>
  );
}