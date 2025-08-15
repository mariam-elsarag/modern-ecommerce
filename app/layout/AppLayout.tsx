import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { languages } from "~/common/constant/constant";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  const lang = hydrated ? i18n.language : "en"; // default SSR lang
  const currentLanguage = languages.find((l) => l.code === lang);

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || "ltr";
    Cookies.set("i18next", lang);
  }, [lang, currentLanguage]);

  return <>{children}</>;
}
