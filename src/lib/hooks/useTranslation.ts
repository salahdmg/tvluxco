import { useLanguage } from './useLanguage';
import { translations } from '../i18n/translations';

export function useTranslation() {
  const { language } = useLanguage();
  
  function t(key: string, params?: Record<string, string>) {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key} in ${language}`);
        return key;
      }
    }
    
    if (typeof value === 'string' && params) {
      return Object.entries(params).reduce(
        (acc, [key, val]) => acc.replace(new RegExp(`{{${key}}}`, 'g'), val),
        value
      );
    }
    
    return value || key;
  }

  return { t, language };
}