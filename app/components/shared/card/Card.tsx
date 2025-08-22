import React from "react";
import type { CardComponentProps } from "./Card.types";
import { useTranslation } from "react-i18next";
import { formatPrice } from "~/common/utils/formatPrice";
import Rate from "../rate/Rate";

const Card = ({ data }: CardComponentProps) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-[4px] flex flex-col gap-6">
      <figure className="bg-neutral-white-100 h-[312px] flex items-center justify-center rounded-[4px]">
        <img
          src={data.image}
          alt={data.title}
          className="h-[250px] rounded-[4px] object-cover "
        />
      </figure>
      <div className="flex flex-col gap-2">
        <h3 className="line-clamp-1 body font-medium text-neutral-black-900">
          {t(data.title)}
        </h3>
        <Rate rate={data?.rate} />
        <div>
          <span className="truncate text-neutral-black-600 body">
            {formatPrice(data.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
