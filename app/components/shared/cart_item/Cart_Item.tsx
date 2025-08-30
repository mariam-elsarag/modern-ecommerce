import React from "react";
import { useTranslation } from "react-i18next";
import type { CartProductsType } from "~/common/types/Type";
import { formatPrice } from "~/common/utils/formatPrice";
import Counter from "../counter/Counter";
import Button from "../button/Button";
import { CloseIcon } from "~/assets/icons/Icon";

type CartItemProps = {
  product: CartProductsType;
};
const Cart_Item = ({ product }: CartItemProps) => {
  const { t } = useTranslation();
  console.log(product, "s");
  return (
    <section className="flex gap-8 sm:items-center flex-col sm:flex-row">
      <figure className="w-full h-[250px] sm:w-20 sm:h-20 rounded-[4px] bg-neutral-white-100 flex items-center justify-center">
        {product?.cover && (
          <img
            src={product?.cover}
            className="h-[200px] sm:h-[62px]"
            alt={product?.title}
          />
        )}
      </figure>
      <div className="flex-1 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="body font-medium text-neutral-black-900 line-clamp-1">
            {product?.title}
          </h3>
          <div className="flex items-center gap-2">
            {product?.color && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-black-500 font-medium">
                  {t("color")}
                </span>

                <span
                  className="flex items-center justify-center w-3 h-3 border border-neutral-white-200 rounded-full"
                  style={{ background: product?.color }}
                />
              </div>
            )}
            {product?.size && (
              <div className="flex items-center gap-2">
                <span className="text-neutral-black-500">—</span>
                <p className="flex items-center gap-1 text-neutral-black-500 text-xs font-medium">
                  <span>{t("size")}:</span>
                  <span>{product?.size}</span>
                </p>
              </div>
            )}
          </div>
        </div>
        <span className="text-neutral-black-900 body font-medium">
          {product?.price ? formatPrice(product?.price) : "0"}
        </span>
      </div>
      {/* remove and quantity */}
      <div className="flex items-center gap-4 ">
        <Counter quantity={product?.quantity} />
        <Button
          size="md"
          variant="secondary"
          icon={<CloseIcon fill="var(--color-neutral-black-500)" />}
        />
      </div>
    </section>
  );
};

export default Cart_Item;
