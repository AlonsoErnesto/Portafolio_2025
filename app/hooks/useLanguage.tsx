import { useState, useEffect } from 'react';

const useLanguage = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [resolvedLanguage, setResolvedLanguage] = useState<'en' | 'es'>(() =>
    navigator.language.startsWith('es') ? 'es' : 'en'
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'es';
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setResolvedLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: 'en' | 'es') => {
    setLanguage(lang);
    setResolvedLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return { language, setLanguage: changeLanguage, resolvedLanguage };
};

export default useLanguage;
