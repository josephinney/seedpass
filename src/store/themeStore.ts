// Estado global del tema

// Importamos las librerías necesarias para el store
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Definimos los tipos de temas disponibles
type ThemeMode = 'light' | 'dark'

// Interface que define la estructura y funciones del store
interface ThemeState {
  theme: ThemeMode;                    // Estado actual del tema
  setTheme: (theme: ThemeMode) => void; // Función para cambiar el tema
  toggleTheme: () => void;             // Función para alternar entre temas
}

// Creamos el store con persistencia en localStorage
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      // Establecemos 'light' como tema predeterminado
      theme: 'light',
      
      // Función para establecer un tema específico
      setTheme: (theme) => set({ theme }),
      
      // Función para alternar entre temas light y dark
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'dark' ? 'light' : 'dark' 
      })),
    }),
    {
      // Nombre de la clave en localStorage donde se guardará la preferencia
      name: 'theme-preferences',
    }
  )
)