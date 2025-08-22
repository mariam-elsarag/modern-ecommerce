import { useTranslation } from "react-i18next";
import type { Route } from "../+types/home";
import { switchLang } from "~/common/utils/switchLang";
import Button from "~/components/shared/button/Button";
import Hero from "./components/hero";
import Features from "./components/features/Features";
import Category from "./components/category_cta/Category";
import Best_Selling from "./components/best_Selling/Best_Selling";
import axiosInstance from "~/services/axiosInstance";
import type { Product } from "~/common/types/Type";
import { API } from "~/services/apiUrl";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ecommerce" },
    { name: "description", content: "Welcome to Ecommerce!" },
  ];
}
export async function clientLoader() {
  const response = await axiosInstance.get<Product[]>(API.home.bestSelling);

  return { bestSelling: response.data };
}
export default function Home({ loaderData }: Route.ComponentProps) {
  const { t } = useTranslation();
  const { bestSelling } = loaderData;
  return (
    <section className="section_gap">
      <Hero />
      <Features />
      <Best_Selling products={bestSelling} />
      <Category />
    </section>
  );
}
