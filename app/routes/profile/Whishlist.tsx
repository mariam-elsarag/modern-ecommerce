import React from "react";
import { useTranslation } from "react-i18next";
import Cart_Item from "~/components/shared/cart_item/Cart_Item";
import Pagination from "~/components/shared/pagination/Pagination";
import useGetData from "~/hooks/useGetData";
import { API } from "~/services/apiUrl";

const Whishlist = () => {
  const { t } = useTranslation();
  const { data } = useGetData(API.products);
  return (
    <div className="max-w-[617px] flex flex-col gap-10 ">
      <h2 className="h5 font-semibold text-neutral-black-900">
        {t("wishlist")}
      </h2>
      <div className="flex flex-col gap-10">
        <section className="flex-1 flex flex-col gap-8 ">
          {data?.map((cart) => (
            <div
              className="pb-8 border-b border-neutral-white-200"
              key={cart?.id}
            >
              <Cart_Item product={cart} variant="wishlist" />
            </div>
          ))}
        </section>
        <div className="flex items-center justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Whishlist;
