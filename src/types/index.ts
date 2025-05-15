// src/types/index.ts
export type Theme = 'dark' | 'light';

export interface FormProps {
  seed1: string;
  seed2: string;
  seed3: string;
  setSeed1: (value: string) => void;
  setSeed2: (value: string) => void;
  setSeed3: (value: string) => void;
  handleGeneratePassword: () => void;
}

export interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export interface DisplayPasswordProps {
  password: string;
}