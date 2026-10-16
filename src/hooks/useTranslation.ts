'use client';

import { useStore } from '@/store/useStore';
import { translations, Language, Translations } from '@/lib/translations';

export function useTranslation(): {
  t: Translations;
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
} {
  const language = useStore((state) => state.language) || 'en';
  const setLanguage = useStore((state) => state.setLanguage);
  const toggleLanguage = useStore((state) => state.toggleLanguage);

  const t = translations[language] || translations.en;

  return {
    t,
    language,
    setLanguage,
    toggleLanguage,
  };
}
