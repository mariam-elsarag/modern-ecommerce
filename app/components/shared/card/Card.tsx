import React, { useState } from "react";
import type { CardComponentProps } from "./Card.types";
import { useTranslation } from "react-i18next";
import { formatPrice } from "~/common/utils/formatPrice";
import Rate from "../rate/Rate";
import Button from "../button/Button";
import { FavoriteIcon } from "~/assets/icons/Icon";

const Card = ({ data }: CardComponentProps) => {
  const { t } = useTranslation();
  const [toggleFavorite, setToggleFavorite] = useState(
    data?.isFavorite || false
  );
  return (
    <div className="bg-white rounded-[4px] flex flex-col gap-6">
      <figure className="relative bg-neutral-white-100 h-[312px] flex items-center justify-center rounded-[4px]">
        <Button
          icon={
            <FavoriteIcon
              width="20"
              height="20"
              fill={toggleFavorite ? "var(--color-semantic-red-900)" : "white"}
              stroke={
                toggleFavorite
                  ? "var(--color-semantic-red-900)"
                  : "var(--color-neutral-black-500)"
              }
            />
          }
          handleClick={() => setToggleFavorite((pre) => !pre)}
          className="absolute top-2 end-2"
          size="xs"
          variant="tertiery"
          round="full"
          hasHover={false}
        />
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
