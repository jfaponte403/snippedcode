import { useState, useEffect } from 'react';

export const AVAILABLE_THEMES = ['light', 'dark', 'monokai'] as const;
export type Theme = typeof AVAILABLE_THEMES[number];

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    if (saved && AVAILABLE_THEMES.includes(saved)) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const changeTheme = (newTheme: string) => {
    if (AVAILABLE_THEMES.includes(newTheme as Theme)) {
      setTheme(newTheme as Theme);
    }
  };

  return { theme, changeTheme };
}
