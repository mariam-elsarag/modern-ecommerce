import { BreadCrumb } from "primereact/breadcrumb";
import React from "react";
import type { PageHeaderTypes } from "./Page_Header.types";
import { useTranslation } from "react-i18next";

const Page_Header = ({
  type = "breadCrumb",
  breadcrumbsList = [],
  label,
  variant = "primary",
}: PageHeaderTypes) => {
  const { t } = useTranslation();
  const style = {
    primary: ``,
    secondary: ``,
  };
  return (
    <header className={`${style[variant]}`}>
      {type === "breadCrumb" ? (
        <BreadCrumb model={breadcrumbsList} />
      ) : (
        <span className="body font-medium text-neutral-black-900">
          {t(label)}
        </span>
      )}
    </header>
  );
};

export default Page_Header;
