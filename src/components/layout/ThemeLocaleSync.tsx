'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';

export function ThemeLocaleSync() {
  const theme = useStore((state) => state.theme);
  const language = useStore((state) => state.language);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    }
  }, [theme]);

  useEffect(() => {
    if (language) {
      document.documentElement.setAttribute('lang', language);
    }
  }, [language]);

  return null;
}
