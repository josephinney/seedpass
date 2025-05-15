/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Dónde buscar tus archivos con clases Tailwind
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  // 2. Activar modo oscuro mediante clase
  darkMode: 'class',
  theme: {
    extend: {
      // aquí puedes personalizar colores, fuentes, etc.
    },
  },
  plugins: [
    // plugins que uses, p.ej. forms, typography
    
  ],
}
