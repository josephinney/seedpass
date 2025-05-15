

'use client';

import { useTheme } from "@/providers/ThemeProvider";
import { Shield, Lock, Key, Heart } from 'lucide-react';

export default function AboutPage() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg`}>
        <div className="flex flex-col items-center mb-10">
          <Shield className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'} mb-4`} size={48} />
          <h1 className={`text-3xl font-bold text-center ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'} mb-2`}>
            About SeedPass
          </h1>
          <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-green-400' : 'bg-green-600'} rounded-full mb-6`}></div>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-2xl text-center`}>
            The modern solution for secure, deterministic password generation that puts you in control of your digital security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} flex flex-col items-center text-center`}>
            <Lock className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'} mb-4`} size={32} />
            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>Our Mission</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              To provide a secure yet simple alternative to traditional password managers by putting the power of strong, unique passwords in your hands.
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} flex flex-col items-center text-center`}>
            <Key className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'} mb-4`} size={32} />
            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>The Technology</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              SeedPass uses cryptographic hashing to transform your personal seeds into strong, unique passwords for every service you use.
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} flex flex-col items-center text-center`}>
            <Heart className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'} mb-4`} size={32} />
            <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>Our Values</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Privacy, security, and simplicity are at the core of everything we do. Your data remains yours - always.
            </p>
          </div>
        </div>
        
        <div className="border-t border-b py-10 my-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>
              Meet the Developer
            </h2>
            <p className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Jose Emilio Phinney
            </p>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              Full-Stack Developer & Security Enthusiast
            </p>
            <a 
              href="mailto:josephinney216@gmail.com" 
              className={`${theme === 'dark' ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'} font-medium hover:underline transition-colors`}
            >
              josephinney216@gmail.com
            </a>
          </div>
          
          <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg max-w-sm`}>
            <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>
              A Message from the Developer
            </h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} italic`}>
              "I created SeedPass because I believe password security should be both robust and accessible. By harnessing the power of deterministic generation, we can forever change how we think about password management."
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>
            Open Source & Transparent
          </h3>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto`}>
            SeedPass is built with transparency in mind. Our algorithms are open for inspection, and we welcome contributions from the security community to further enhance our solution.
          </p>
        </div>
      </div>
    </div>
  );
}