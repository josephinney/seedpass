'use client';

import { useTheme } from "@/providers/ThemeProvider";
import { HelpCircle, Lightbulb, ShieldCheck } from 'lucide-react';

export default function HelpPage() {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg`}>
        <div className="flex flex-col items-center mb-10">
          <HelpCircle className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'} mb-4`} size={48} />
          <h1 className={`text-3xl font-bold text-center ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'} mb-2`}>
            SeedPass Help & Guide
          </h1>
          <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-green-400' : 'bg-green-600'} rounded-full mb-6`}></div>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-2xl text-center`}>
            Learn how to use SeedPass effectively and stay in control of your digital security without storing any passwords.
          </p>
        </div>

        {/* What is SeedPass */}
        <section className="mb-12">
          <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-green-300' : 'text-gray-800'}`}>
            What is SeedPass?
          </h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            SeedPass is a modern, secure password solution that eliminates the need to store or remember traditional passwords. 
            By using three memorable "seeds", you can generate unique, strong passwords on demand—anytime, anywhere.
          </p>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-green-300' : 'text-gray-800'}`}>
            How to Use SeedPass
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Service Name</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Enter the name of the service or platform (e.g., Gmail, Instagram). This helps personalize the password.
              </p>
            </div>
            <div>
              <h3 className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Favorite Number</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Use a number meaningful to you. Make sure it’s something easy to remember but hard to guess.
              </p>
            </div>
            <div>
              <h3 className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Important Year</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Choose a year related to a personal event—something memorable to you but obscure to others.
              </p>
            </div>
            <div>
              <h3 className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Generate Password</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Tap the generate button. Your inputs are cryptographically combined to produce a unique password.
              </p>
            </div>
            <div>
              <h3 className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Reusability</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                The same input will always return the same output. No need to store anything—just re-enter your seeds.
              </p>
            </div>
          </div>
        </section>

        {/* Why Use */}
        <section className="mb-12">
          <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-green-300' : 'text-gray-800'}`}>
            Why Choose SeedPass?
          </h2>
          <ul className="space-y-3">
            <li className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <ShieldCheck className="inline mr-2 text-green-400" size={18} />
              No storage required – your passwords live only in your mind.
            </li>
            <li className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <ShieldCheck className="inline mr-2 text-green-400" size={18} />
              Unique & unguessable – each service gets its own cryptographically generated password.
            </li>
            <li className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <ShieldCheck className="inline mr-2 text-green-400" size={18} />
              Always available – generate anywhere, even offline.
            </li>
            <li className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <ShieldCheck className="inline mr-2 text-green-400" size={18} />
              Built-in password versioning – change one seed slightly to create a new password.
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-green-300' : 'text-gray-800'}`}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className={`font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>What if I forget my seeds?</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Unfortunately, the system is designed to not store anything—if you forget your seeds, the password cannot be recovered. We recommend using seeds tied to deep personal memories.
              </p>
            </div>
            <div>
              <h3 className={`font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Can someone guess my password?</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Without knowing all three of your exact seeds, it's highly unlikely. The password generation is cryptographically secure.
              </p>
            </div>
            <div>
              <h3 className={`font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Is SeedPass safer than traditional password managers?</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Yes—in many cases. Since nothing is saved, there's no database to hack. Your memory becomes your password vault.
              </p>
            </div>
          </div>
        </section>

        {/* Pro Tip */}
        <section className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}   p-6 rounded-lg`}>
          <div className="flex items-center mb-4">
            <Lightbulb className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'} mr-2`} size={24} />
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-green-300' : 'text-gray-800'}`}>
              Pro Tip
            </h3>
          </div>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} italic`}>
            Choose seeds that are emotionally memorable but non-obvious. Think: “city where I found my first job,” “number from a childhood jersey,” or “year of a secret personal victory.”
          </p>
        </section>
      </div>
    </div>
  );
}
