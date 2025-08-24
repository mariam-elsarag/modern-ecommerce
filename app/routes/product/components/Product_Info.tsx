import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import type { Product } from "~/common/types/Type";
import { currentLanguageCode } from "~/common/utils/switchLang";
import Button from "~/components/shared/button/Button";
import {
  FavoriteIcon,
  FullStarIcon,
  MinusIcon,
  PlusIcon,
  ShareIcon,
} from "~/assets/icons/Icon";
import Badge from "~/components/shared/badge/Badge";
import { useTranslation } from "react-i18next";
import { formatPrice } from "~/common/utils/formatPrice";

type ProductInfoPropsType = {
  product: Product | undefined;
};
const Product_Info = ({ product }: ProductInfoPropsType) => {
  const { t } = useTranslation();

  return (
    <section className="overflow-x-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[543px_1fr] gap-6 md:gap-10 2xl:gap-[120px] ">
      <figure className="bg-neutral-white-100 rounded-[5px] min-h-[375px]  lg:h-[500px]  pt-10 pb-6 ">
        <Swiper
          key={currentLanguageCode}
          loop={true}
          pagination={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          modules={[Autoplay, Pagination]}
          className="h-full flex flex-col justify-center items-center"
        >
          {product?.images?.map((pro, index) => (
            <SwiperSlide key={index} className="">
              <img
                src={pro}
                alt={product.title}
                className=" mx-auto  h-[280px]  md:h-[300px]  lg:h-[404px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </figure>
      {/* info */}
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-1 justify-between">
            <h1 className="h3 text-neutral-black-900 font-bold line-clamp-1">
              {product?.title}
            </h1>
            <Button
              variant="tertiery"
              icon={<ShareIcon />}
              size="sm"
              className="!px-0 !w-[38px]"
            />
          </div>
          <div className="flex items-center gap-2 ">
            <Badge
              label={`${t("_review", { rate: product.rate })}`}
              icon={<FullStarIcon />}
              variant="secondary"
            />
            <Badge label="in_stock" />
          </div>
        </header>
        {/* price */}
        {product.price && (
          <h4 className="text-neutral-black-900 h4 font-semibold line-clamp-1">
            {formatPrice(product.price)}
          </h4>
        )}
        {/* colors */}
        {product?.colors?.length > 0 && (
          <div className="flex flex-col gap-3">
            <h4 className="label text-neutral-black-500 font-medium uppercase">
              {t("avalible_colors")}
            </h4>
            <div className="flex items-center gap-2.5">
              {product.colors?.map((item) => (
                <span
                  key={item}
                  className={` w-8 h-8 rounded-full flex items-center justify-center border border-neutral-black-100 cursor-pointer`}
                >
                  <span
                    style={{ background: item }}
                    className="w-6 h-6 flex rounded-full"
                  />
                </span>
              ))}
            </div>
          </div>
        )}
        {/* sizes */}
        {product?.sizes?.length > 0 && (
          <div className="flex flex-col gap-3">
            <h4 className="label text-neutral-black-500 font-medium uppercase">
              {t("select_size")}
            </h4>
            <div className="flex items-center gap-2.5">
              {product.sizes?.map((item) => (
                <div
                  key={item}
                  className={`w-10 h-10 flex items-center justify-center rounded-[4px] border border-neutral-black-100 text-neutral-black-500 label font-medium`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* quantity */}
        {product?.quantity && (
          <div className="flex flex-col gap-3">
            <h4 className="label text-neutral-black-500 font-medium uppercase">
              {t("quantity")}
            </h4>
            <div
              className={` flex items-center justify-between gap-3 min-w-[164px] min-h-[44px] border border-neutral-black-100 w-fit px-4 rounded-[4px]`}
            >
              <span className="flex w-6 h-6 items-center justify-center cursor-pointer">
                <MinusIcon />
              </span>
              <input
                className="outline-none shadow-none w-6 h-6 items-center justify-center text-center text-neutral-black-900 body font-medium"
                max={product.quantity}
                value={0}
              />
              <span className="flex w-6 h-6 items-center justify-center cursor-pointer">
                <PlusIcon />
              </span>
            </div>
          </div>
        )}
        <footer className="flex items-center gap-4">
          <Button className="min-w-[284px]" text="add_to_cart" />
          <Button
            icon={<FavoriteIcon />}
            variant="outline"
            className="!w-[40px] md:!w-[45px] !px-0"
          />
        </footer>
      </div>
    </section>
  );
};

export default Product_Info;
