import { createContext, useState, useContext } from "react";
import { translations } from "../utils/traducoes";


const LanguageContext = createContext();


export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt"); 


  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
  };


  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}


export function useLanguage() {
  return useContext(LanguageContext);
}