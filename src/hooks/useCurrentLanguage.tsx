import { useState, useEffect } from "react";
import i18n from "../i18n/i18n";

export const useCurrentLanguage = () => {
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", setLang);
    return () => {
      i18n.off("languageChanged", setLang);
    };
  }, []);

  return lang;
};
