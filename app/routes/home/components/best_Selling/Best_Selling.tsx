import type { Product } from "~/common/types/Type";
import Card from "~/components/shared/card/Card";

type BestSellingProps = {
  products: Product[];
};

const Best_Selling = ({ products }: BestSellingProps) => {
  return (
    <section className="container">
      <div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
};
export default Best_Selling;
