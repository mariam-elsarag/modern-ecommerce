import React from "react";
import type { Product } from "~/common/types/Type";
import { API } from "~/services/apiUrl";
import axiosInstance from "~/services/axiosInstance";
import type { Route } from "./+types/Product_Details";
import Similar_Products from "./components/Similar_Products";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const { id } = params;

  const response = await axiosInstance.get<Product[]>(API.products);

  const product = response.data.find((p) => p.id == id);

  let similarProducts: Product[] = [];

  if (product && product.categories?.length > 0) {
    similarProducts = response.data.filter(
      (pro) =>
        pro.id !== product.id &&
        pro.categories &&
        pro.categories.some((cat) => product.categories.includes(cat))
    );
  }

  return { product, id, similarProducts };
}

const Product_Details = ({ loaderData }: Route.ComponentProps) => {
  const { id, product, similarProducts } = loaderData;

  return (
    <section className="container">
      <Similar_Products products={similarProducts} />
    </section>
  );
};

export default Product_Details;
