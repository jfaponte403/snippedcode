import { useState, useEffect } from 'react';
import { detectLanguage } from '../utils/detectLanguage';

export function useLanguageDetection(code: string, delay: number = 300) {
  const [language, setLanguage] = useState<string>('text');

  useEffect(() => {
    const handler = setTimeout(() => {
      setLanguage(detectLanguage(code));
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [code, delay]);

  return language;
}
