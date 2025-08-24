import React from "react";
import { useTranslation } from "react-i18next";
import type { Product } from "~/common/types/Type";
import Button from "~/components/shared/button/Button";

type ReviewProps = {
  product: Product | undefined;
};
const Reviews = ({ product }: ReviewProps) => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col gap-6">
      <header className="flex flex-col gap-10 pb-4 border-b border-neutral-white-200">
        <div className="flex flex-col gap-4">
          <h5 className="text-neutral-black-900 h5 font-semibold">
            {t("reviews")}
          </h5>
          <p className="flex items-center gap-4 text-neutral-black-400 body">
            <strong className="h2 font-bold text-neutral-black-900">
              {product?.rate}
            </strong>
            {t("reviews")}
          </p>
        </div>
        <Button text="write_review" variant="outline_dark" />
      </header>
    </section>
  );
};

export default Reviews;
