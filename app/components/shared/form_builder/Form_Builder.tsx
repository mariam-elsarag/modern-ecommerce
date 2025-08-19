import React from "react";
import type { FormBuiderProps, FormListItemType } from "./Form_Builder-types";
import { InfoIcon } from "~/assets/icons/Icon";
import { useTranslation } from "react-i18next";
import {
  Controller,
  type ControllerRenderProps,
  type FieldError,
} from "react-hook-form";
import type { an } from "node_modules/react-router/dist/development/context-DohQKLID.mjs";

const Form_Builder = ({
  formList,
  control,
  errors,
  loading,
}: FormBuiderProps) => {
  const { t } = useTranslation();
  const renderField = (
    item: FormListItemType,
    field: ControllerRenderProps<any, any>,
    error: FieldError | undefined
  ) => {
    const isInvalid = !!(error?.message || errors?.[item?.fieldName]?.message);
    switch (item.formType) {
      case "input":
        return (
          <input
            id={item?.id}
            inputMode={item?.inputMode ?? "text"}
            name={item?.name}
            type={item?.type}
            value={field.value || item.value || ""}
            disabled={item.disabled || loading}
            placeholder={item.placeholder ? t(item.placeholder) : ""}
            className={`flex-1 w-full input main_h ${isInvalid ? "invalid" : ""} ${item.inputClassName || ""}`}
            onInput={(e) => item.onInput?.(e, field)}
            autoFocus={item.autFocus}
            onChange={(e) => {
              field.onChange(e);
              if (item?.action) {
                item?.action?.(e);
              }
            }}
            min={0}
            onWheel={(e) => e.currentTarget.blur()}
          />
        );
      default:
        return <></>;
    }
  };
  return (
    <>
      {formList?.length > 0 &&
        formList?.map((formItem) => (
          <fieldset
            key={formItem.id}
            className={`flex-1 grid gap-2 content-baseline ${formItem.containerClassName || ""}`}
          >
            {formItem.label && (
              <label
                className={`body text-neutral-black-600 capitalize font-medium ${formItem.labelClassName || ""}`}
                htmlFor={formItem.fieldName}
                dangerouslySetInnerHTML={{ __html: formItem.label }}
              />
            )}
            {formItem.fieldName && (
              <Controller
                name={formItem.fieldName}
                control={control}
                rules={formItem.validator}
                render={({ field, fieldState: { error } }) =>
                  renderField(formItem, field, error)
                }
              />
            )}
            {/* info */}
            {formItem.info && !errors?.[formItem.fieldName]?.message && (
              <p className="text-neutral-white-100 body">{formItem.info}</p>
            )}
            {errors?.[formItem.fieldName]?.message && (
              <p className="flex items-center gap-1">
                <span>
                  <InfoIcon
                    width="20"
                    height="20"
                    fill={
                      formItem?.errorFill ?? "var(--color-semantic-red-900)"
                    }
                  />
                </span>
                <span
                  className={`text-semantic-red-900 text-xs ${
                    formItem?.errorClassName ?? ""
                  }`}
                >
                  {t(String(errors[formItem.fieldName]?.message))}
                </span>
              </p>
            )}
          </fieldset>
        ))}
    </>
  );
};

export default Form_Builder;
