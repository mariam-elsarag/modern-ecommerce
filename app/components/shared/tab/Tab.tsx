import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { TabPropsType } from "./Tab.types";
import { NavLink } from "react-router";

const Tab = ({
  list = [],
  variant = "filter",

  setValue,
  fieldName,
  currentValue,
}: TabPropsType) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseUpOrLeave = () => {
    if (!containerRef.current) return;
    setIsDragging(false);
    containerRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleClick = (val: string | number | undefined) => {
    if (!setValue) return;
    if (variant === "filter" && fieldName) {
      setValue((prev: any) => ({ ...prev, [fieldName]: val }));
    } else if (variant === "click") {
      setValue(val);
    }
  };

  return (
    <section
      className="flex gap-4 overflow-x-auto cursor-grab select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUpOrLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={containerRef}
    >
      {list.map((item) => {
        const isActive =
          variant !== "navigation" &&
          ((!currentValue && item.default) || currentValue === item.value);

        return variant === "navigation" ? (
          <NavLink
            key={item.title}
            to={item.to || ""}
            className={`px-4 py-[3px] rounded-full cursor-pointer body font-medium border ${
              isActive
                ? "text-neutral-black-800 border-neutral-white-200"
                : "text-neutral-black-500 border-transparent"
            }`}
          >
            {t(item.title)}
          </NavLink>
        ) : (
          <span
            key={item.title}
            onClick={() => handleClick(item.value)}
            className={`px-4 py-[3px] rounded-full cursor-pointer body font-medium border ${
              isActive
                ? "text-neutral-black-800 border-neutral-white-200"
                : "text-neutral-black-500 border-transparent"
            }`}
          >
            {t(item.title)}
          </span>
        );
      })}
    </section>
  );
};

export default Tab;
