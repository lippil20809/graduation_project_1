import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { langs } from "./translation";
import { Langs } from "./LocalesProvider.types";

export const LocalesContext = createContext({});

export const useLocales = () => useContext(LocalesContext);

const LocalesProvider: React.FC = ({ children }) => {
  const langLocal = localStorage.getItem("lang");

  let langLocalStorage = langLocal ? JSON.parse(langLocal) : {};

  const [lang, setLang] = useState<Langs>(langLocalStorage);

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang));
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev: Langs) => (prev === "en" ? "ru" : "en"));
  }, []);

  return (
    <LocalesContext.Provider value={{ trans: langs[lang], toggleLang }}>
      {children}
    </LocalesContext.Provider>
  );
};

export default LocalesProvider;
