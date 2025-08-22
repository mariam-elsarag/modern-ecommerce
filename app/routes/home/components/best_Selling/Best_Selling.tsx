import { useTranslation } from "react-i18next";
import type { Product } from "~/common/types/Type";
import Card from "~/components/shared/card/Card";

type BestSellingProps = {
  products: Product[];
};

const Best_Selling = ({ products }: BestSellingProps) => {
  const { t } = useTranslation();
  return (
    <section className="container flex flex-col gap-20 section_p">
      <header className="w-fit mx-auto">
        <sup className="text-neutral-black-300 label font-medium tracking-[2px] uppercase">
          {t("shop_now")}
        </sup>
        <h2 className="h3 font-bold text-neutral-black-900">
          {t("best_selling")}
        </h2>
      </header>
      <div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
};
export default Best_Selling;
