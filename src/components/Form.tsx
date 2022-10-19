import * as React from "react";
import { getFieldValue } from "../core/getFieldValue";
import {
  getFormValuesAsFormData,
  getFormValuesAsJson,
} from "../core/getFormValues";
import { setFieldError } from "../core/setFieldError";
import { setFieldValue } from "../core/setFieldValue";
import {
  FieldInputElement,
  FormErrors,
  FormHandler,
  FormValues,
} from "../core/types";

export type FormProps<FV extends FormValues = FormValues> = {
  dialog?: boolean;
  // action & method as helpful fallback for when no JS support
  method?: "post" | "get";
  action?: string;
  onChange?: FormHandler<FV>;
  onBlur?: FormHandler<FV>;
  className?: string | undefined;
} & (
  | {
      submitFormData: (data: FormData) => Promise<void | FormErrors<FV>>;
      submitJson?: void;
    }
  | {
      submitFormData?: void;
      submitJson: (
        data: Record<string, unknown>
      ) => Promise<void | FormErrors<FV>>;
    }
);

export function Form({
  dialog,
  method = "post",
  action,
  submitFormData,
  submitJson,
  onChange,
  onBlur,
  className,
  ...props
}: FormProps): React.ReactElement {
  if (!submitFormData && !submitJson)
    throw new Error(
      "Must supply a submit method prop of either `submitFormData` or `submitJson`."
    );

  const smartProps = {} as Record<string, unknown>;
  if (onChange)
    smartProps["onChange"] = (event: React.ChangeEvent<FieldInputElement>) => {
      const form = event.target.form!;
      const formErrors = onChange(
        (name) => getFieldValue(form, name),
        (name, value) => setFieldValue(form, name, value)
      );
      if (formErrors)
        for (const name of Object.keys(formErrors))
          setFieldError(form, name, formErrors[name]);
    };

  if (onBlur)
    smartProps["onBlur"] = (event: React.FocusEvent<FieldInputElement>) => {
      const form = event.target.form!;
      const formErrors = onBlur(
        (name) => getFieldValue(form, name),
        (name, value) => setFieldValue(form, name, value)
      );
      if (formErrors)
        for (const name of Object.keys(formErrors))
          setFieldError(form, name, formErrors[name]);
    };

  return (
    <form
      {...props}
      className={"df-Form".concat(className ? " " : "", className || "")}
      // skip built-in form validation if we're running JS in the client environment
      // otherwise if prerendering on the server, we fallback to built-in form validation so things work okay in js-less env
      noValidate={typeof window !== "undefined"}
      method={dialog ? "dialog" : method}
      action={action}
      {...smartProps}
      onSubmit={(event) => {
        const form = event.target as HTMLFormElement;
        // if this is a regular html form, then prevent the default form submission
        if (!dialog) event.preventDefault();
        if (form.reportValidity()) {
          (submitFormData
            ? // FormData is the preferred, browser native way, but may not be ideal in all instances
              submitFormData(getFormValuesAsFormData(form))
            : submitJson!(getFormValuesAsJson(form))
          ).then((formErrors) => {
            if (!formErrors) return;
            for (const name of Object.keys(formErrors))
              setFieldError(form, name, formErrors[name]);
          });
        }
      }}
    />
  );
}
