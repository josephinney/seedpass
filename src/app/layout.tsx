'use client';

import "./globals.css";

import { Shield } from 'lucide-react';


import { ThemeProvider } from "@/providers/ThemeProvider";
import Navigation from '@/components/layout/Navigation';
import { useTheme } from "@/providers/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  const {theme} = useTheme();

  
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen pt-16 pb-20`}>
          <Navigation />
          <main className="container mx-auto py-8">
            <div className="flex justify-center items-center mb-8">
              <Shield className={`${theme === 'dark' ? 'text-green-400' : 'text-green-500'} mr-2`} size={28} />
              <h1 className={`text-3xl font-bold text-center ${theme === 'dark' ? 'text-green-400' : 'text-black'}`}>
                SeedPass
                <span className={`block text-sm font-normal ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  Deterministic Password Generator
                </span>
              </h1>
            </div>
            {children}
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}