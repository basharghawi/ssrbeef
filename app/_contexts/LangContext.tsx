import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LangContextProps {
  lang: string;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<string>(localStorage.getItem('lang') || 'ltr');

  useEffect(() => {
    const localLang = localStorage.getItem('lang') || 'ltr';
    setLang(localLang);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'ltr' ? 'rtl' : 'ltr'));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};
