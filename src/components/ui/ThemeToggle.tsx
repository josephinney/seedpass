import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useThemeStore } from '@/store/themeStore'

const ThemeToggle = () => {
  // Obtenemos el tema actual y la función para alternarlo desde el store
  const theme = useThemeStore(state => state.theme)
  const toggleTheme = useThemeStore(state => state.toggleTheme)
  
  // Estado para controlar si el componente ya se montó (evita problemas de hidratación)
  const [mounted, setMounted] = useState(false)

  // Este efecto se ejecuta una vez al montar el componente
  useEffect(() => {
    // Marcamos el componente como montado para evitar diferencias entre SSR y cliente
    setMounted(true)
  }, [])

  // Si el componente no está montado, no renderizamos nada (evita errores de hidratación)
  if (!mounted) return null

  return (
    // Botón para cambiar el tema con estilos adaptados al tema actual
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all hover:scale-105"
      aria-label="Toggle theme"
    >
      {/* Mostrar icono según el tema actual */}
      {theme === 'dark' ? (
        // Icono del sol para el tema oscuro
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        // Icono de la luna para el tema claro
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  )
}

export default ThemeToggle


// src/components/ThemeToggle.tsx
// import { Moon, Sun } from 'lucide-react'
// import { useEffect, useState } from 'react'
// import { useThemeStore } from '@/store/themeStore'

// const ThemeToggle = () => {
//   const theme       = useThemeStore(s => s.theme)
//   const toggleTheme = useThemeStore(s => s.toggleTheme)
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => setMounted(true), [])
//   if (!mounted) return null

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full transition-all hover:scale-105"
//       aria-label="Toggle theme"
//     >
//       {theme === 'dark'
//         ? <Sun className="w-5 h-5 text-yellow-400" />
//         : <Moon className="w-5 h-5 text-gray-800" />}
//     </button>
//   )
// }

// export default ThemeToggle
