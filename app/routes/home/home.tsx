import { useTranslation } from "react-i18next";
import type { Route } from "../+types/home";
import { switchLang } from "~/common/utils/switchLang";
import Button from "~/components/shared/button/Button";
import Hero from "./components/hero";
import Features from "./components/features/Features";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ecommerce" },
    { name: "description", content: "Welcome to Ecommerce!" },
  ];
}

export default function Home() {
  const { t } = useTranslation();
  return (
    <section className="section_gap">
      <Hero />
      <Features />
    </section>
  );
}
