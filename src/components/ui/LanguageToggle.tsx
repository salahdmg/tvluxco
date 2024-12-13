import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Language } from '@/lib/context/language';
import { useState } from 'react';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'nl', label: 'NL' },
  { code: 'es', label: 'ES' },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        aria-label="Change language"
      >
        <span className="text-primary font-medium">
          {language.toUpperCase()}
        </span>
      </motion.button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-background rounded-lg shadow-lg ring-1 ring-white/10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 text-sm text-left hover:bg-primary/10 transition-colors ${
                language === lang.code ? 'text-primary' : 'text-foreground'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}