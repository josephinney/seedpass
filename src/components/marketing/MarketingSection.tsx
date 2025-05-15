// const MarketingSection = () => {
//   return (
//     <div className="w-full max-w-4xl mx-auto px-4 mt-8 mb-16">
//       <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-green-400">Why Choose SeedPass?</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-green-400">Never Forget a Password Again</h3>
//           <p className="text-gray-700 dark:text-gray-300">
//             With SeedPass, you'll never need to reset a forgotten password. Just remember your three seeds and regenerate your password anytime, anywhere.
//           </p>
//         </div>
        
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-green-400">Unhackable By Design</h3>
//           <p className="text-gray-700 dark:text-gray-300">
//             Since your passwords are never stored in a database, there's nothing to hack. SeedPass creates passwords on-demand using your personal seeds.
//           </p>
//         </div>
        
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-green-400">Complete Privacy</h3>
//           <p className="text-gray-700 dark:text-gray-300">
//             SeedPass works entirely in your browser - your seeds and generated passwords never leave your device. Your privacy is always protected.
//           </p>
//         </div>
//       </div>
      
//       <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
//         <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-green-400">Security Experts Trust SeedPass</h3>
//         <p className="text-gray-700 dark:text-gray-300 mb-6">
//           "SeedPass represents a paradigm shift in password management. By generating passwords deterministically rather than storing them, it eliminates a major attack vector." - Security Expert
//         </p>
//         <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
//           <p className="text-gray-700 dark:text-gray-300 italic">
//             [Placeholder for testimonials and security endorsements]
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarketingSection;


'use client';

import { useTheme } from "@/providers/ThemeProvider";

const MarketingSection = () => {
  const { theme } = useTheme();
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-8 mb-16">
      <h2 className={`text-2xl font-bold text-center mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>Why Choose SeedPass?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
          <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>Never Forget a Password Again</h3>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            With SeedPass, you'll never need to reset a forgotten password. Just remember your three seeds and regenerate your password anytime, anywhere.
          </p>
        </div>
        
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
          <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>Unhackable By Design</h3>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Since your passwords are never stored in a database, there's nothing to hack. SeedPass creates passwords on-demand using your personal seeds.
          </p>
        </div>
        
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
          <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>Complete Privacy</h3>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            SeedPass works entirely in your browser - your seeds and generated passwords never leave your device. Your privacy is always protected.
          </p>
        </div>
      </div>
      
      <div className={`mt-12 p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md text-center`}>
        <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-gray-800'}`}>Security Experts Trust SeedPass</h3>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
          "SeedPass represents a paradigm shift in password management. By generating passwords deterministically rather than storing them, it eliminates a major attack vector." - Security Expert
        </p>
        <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-md`}>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} italic`}>
            [Placeholder for testimonials and security endorsements]
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;