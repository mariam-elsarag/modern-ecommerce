import { useTranslation } from "react-i18next";
import type { Route } from "./+types/home";
import { switchLang } from "~/common/utils/switchLang";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ecommerce" },
    { name: "description", content: "Welcome to Ecommerce!" },
  ];
}

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <button onClick={() => switchLang()}>test</button>

      <h1 className="mt-4">{t("home")}</h1>
      <p>{t("welcome")}</p>
    </>
  );
}
