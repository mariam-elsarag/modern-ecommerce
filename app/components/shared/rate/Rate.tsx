import React from "react";
import type { RatePropsType } from "./Rate.types";
import { FullStarIcon, StarIcon } from "~/assets/icons/Icon";

const Rate = ({
  rate = 0,

  onChange,
  changeValue = false,
  hasText = true,
}: RatePropsType) => {
  const handleRate = (n: number) => {
    if (changeValue) {
      onChange(n);
    }
  };
  return (
    <section className="flex items-center gap-1">
      {hasText && rate > 0 && (
        <span className="text-xs text-neutral-black-600">({rate})</span>
      )}
      <div className="flex items-center ">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            role="button"
            aria-label="rate"
            className={changeValue ? "cursor-pointer" : "cursor-default"}
            onMouseEnter={() => {
              handleRate(i + 1);
            }}
            onClick={() => {
              handleRate(i + 1);
            }}
          >
            {i + 1 <= rate ? (
              <FullStarIcon fill="var(--color-semantic-yellow-900)" />
            ) : (
              <StarIcon fill="var(--color-semantic-yellow-900)" />
            )}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Rate;
