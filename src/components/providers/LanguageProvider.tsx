import { ReactNode, useState, useEffect } from 'react';
import { LanguageContext, Language } from '@/lib/context/language';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
    document.documentElement.lang = newLanguage;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && ['en', 'fr', 'nl', 'es'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      const browserLanguage = navigator.language.split('-')[0] as Language;
      if (['en', 'fr', 'nl', 'es'].includes(browserLanguage)) {
        setLanguage(browserLanguage);
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}