import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { langs } from './translation';


export const LocalesContext = createContext({});

export const useLocales = () => useContext(LocalesContext);

function LocalesProvider({ children }) {

  let langLocalStorage = JSON.parse(localStorage.getItem('lang') );

  const [lang, setLang] = useState(langLocalStorage);

  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(lang));
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'en' ? 'ru' : 'en'));
  }, []);
  return <LocalesContext.Provider value={{ trans: langs[lang], toggleLang }}>{children}</LocalesContext.Provider>;
}

export default LocalesProvider;
