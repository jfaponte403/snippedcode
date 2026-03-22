import { useState, useEffect } from 'react';

export const AVAILABLE_THEMES = ['light', 'dark'];

export function useTheme() {
  const [theme, setTheme] = useState<string>(() => {
    const saved = localStorage.getItem('theme');
    if (saved && AVAILABLE_THEMES.includes(saved)) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const changeTheme = (newTheme: string) => {
    if (AVAILABLE_THEMES.includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  return { theme, changeTheme };
}
