import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { passwordPattern } from "~/common/constant/validator";
import { handleError } from "~/common/utils/handleError";
import Button from "~/components/shared/button/Button";
import Form_Builder from "~/components/shared/form_builder/Form_Builder";
import type { FormListItemType } from "~/components/shared/form_builder/Form_Builder-types";
import Page_Header from "~/components/shared/header/page_header/Page_Header";
import type { breadCrumbListType } from "~/components/shared/header/page_header/Page_Header.types";

const Reset_Password = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // ___________ useform _________
  const {
    control,
    setError,
    getValues,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      password: null,
      confirmPassword: null,
    },
    mode: "onChange",
  });
  // _______________ list ______________
  const formList: FormListItemType[] = [
    {
      id: "1",
      formType: "password",
      name: "password",
      label: "new_password",
      fieldName: "password",
      validator: {
        required: "password_is_required",
        pattern: {
          value: passwordPattern,
          message: "password_pattern_error",
        },
      },
      showForgetPassword: false,
      inlineError: false,
    },
    {
      id: "2",
      formType: "password",
      name: "confirmPassword",
      label: "confirmPassword",
      fieldName: "confirmPassword",
      validator: {
        required: "confirm_password_is_required",
        validate: (value: string) => {
          const password = getValues("password");
          return value === password || "password_mismatch";
        },
      },
      showForgetPassword: false,
      inlineError: false,
    },
  ];
  const breadcrumbsList: breadCrumbListType[] = [
    {
      label: t("login"),
      template: () => (
        <Link to={`/forget-password`}>{t("forget_password")}</Link>
      ),
    },
    {
      label: t("reset_password"),
    },
  ];
  // _________________function __________-
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      navigate(`/`);
    } catch (err) {
      handleError(err, t);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex flex-col gap-20">
      <Page_Header
        title="reset_password"
        breadcrumbsList={breadcrumbsList}
        variant="secondary"
      />
      <section className="container">
        <div className=" max-w-[400px] sm:max-w-[320px] flex flex-col mx-auto w-full gap-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-4 flex flex-col gap-10"
          >
            <fieldset className="flex flex-col gap-6">
              <Form_Builder
                formList={formList}
                control={control}
                errors={errors}
              />
            </fieldset>

            <Button
              loading={loading}
              disabled={loading || !isValid}
              text="reset_password"
              type="submit"
              hasFullWidth
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Reset_Password;
