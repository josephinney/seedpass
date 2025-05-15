// 'use client';

// import { Home, HelpCircle, Info, Shield } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import ThemeToggle from '../ui/ThemeToggle';

// const Navigation = () => {
//   const pathname = usePathname();
  
//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-10 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-2">
//           <div className="flex items-center space-x-2 md:space-x-4">
//             <ThemeToggle />
//             <span className="hidden md:block text-xl font-bold text-black dark:text-green-400">SeedPass</span>
//           </div>
//           <div className="flex justify-around w-full md:w-auto md:justify-end md:space-x-8">
//             <Link
//               href="/"
//               className={`flex flex-col items-center p-2 ${pathname === '/' ? 'text-green-500 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}
//             >
//               <Home size={20} />
//               <span className="text-xs mt-1">Home</span>
//             </Link>
//             <Link
//               href="/help"
//               className={`flex flex-col items-center p-2 ${pathname === '/help' ? 'text-green-500 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}
//             >
//               <HelpCircle size={20} />
//               <span className="text-xs mt-1">Help</span>
//             </Link>
//             <Link
//               href="/about"
//               className={`flex flex-col items-center p-2 ${pathname === '/about' ? 'text-green-500 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}
//             >
//               <Info size={20} />
//               <span className="text-xs mt-1">About</span>
//             </Link>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navigation;


'use client';

import { Home, HelpCircle, Info, Shield } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from "@/providers/ThemeProvider";

const Navigation = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  
  return (
    <div className={`fixed bottom-0 left-0 right-0 ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t z-10 md:top-0 md:bottom-auto md:border-t-0 md:border-b`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-2 md:space-x-4">
            <ThemeToggle />
            <span className={`hidden md:block text-xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-black'}`}>SeedPass</span>
          </div>
          <div className="flex justify-around w-full md:w-auto md:justify-end md:space-x-8">
            <Link
              href="/"
              className={`flex flex-col items-center p-2 ${pathname === '/' ? (theme === 'dark' ? 'text-green-400' : 'text-green-500') : (theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}`}
            >
              <Home size={20} />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link
              href="/help"
              className={`flex flex-col items-center p-2 ${pathname === '/help' ? (theme === 'dark' ? 'text-green-400' : 'text-green-500') : (theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}`}
            >
              <HelpCircle size={20} />
              <span className="text-xs mt-1">Help</span>
            </Link>
            <Link
              href="/about"
              className={`flex flex-col items-center p-2 ${pathname === '/about' ? (theme === 'dark' ? 'text-green-400' : 'text-green-500') : (theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}`}
            >
              <Info size={20} />
              <span className="text-xs mt-1">About</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;