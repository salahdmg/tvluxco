import { createContext } from 'react';

export type Language = 'en' | 'fr' | 'nl' | 'es';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);