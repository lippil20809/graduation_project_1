import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { langs } from "./translation";
import { Langs,LocalesContextContext } from "./LocalesProvider.types";

export const LocalesContext = createContext<LocalesContextContext>({
  trans: langs.ru
});

export const useLocales = () => useContext(LocalesContext);

const getItem = <T extends string>(key: string, defaultValue?: unknown) => {
  const value = localStorage.getItem("lang") ?? defaultValue
  return value as T
} 

const LocalesProvider: React.FC = ({ children }) => {
  const [lang, setLang] = useState<Langs>(getItem<Langs>('lang', 'ru'));

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang));
  }, [lang]);

   const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ru" : "en"));
  }, []);

  return (
    <LocalesContext.Provider value={{ trans: langs[lang], toggleLang }}>
      {children}
    </LocalesContext.Provider>
  );
};

export default LocalesProvider;
