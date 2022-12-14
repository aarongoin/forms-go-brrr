import * as React from "react";
import {
  getFormValuesAsFormData,
  getFormValuesAsJson,
} from "../core/getFormValues";
import { setFormFieldError } from "../core/setFormFieldError";
import { FormErrors, FormHandler, FormValues } from "../core/types";
import { validateForm } from "../core/validateForm";
import { validationEffectHandler } from "../core/validationEffectHandler";

export type FormProps<FV extends FormValues = FormValues> =
  React.PropsWithChildren<
    Omit<
      React.FormHTMLAttributes<HTMLFormElement>,
      "method" | "noValidate" | "autoComplete" | "target" | "encType"
    > & {
      dialog?: boolean;
      // action & method as helpful fallback for when no JS support
      method?: "post" | "get";
      action?: string;
      target?: "_self" | "_blank" | "_parent" | "_top";
      encType?:
        | "application/x-www-form-urlencoded"
        | "multipart/form-data"
        | "text/plain";
      autoComplete?: boolean;
      validateOnBlur?: FormHandler<FV>;
      validateOnChange?: FormHandler<FV>;
      submitFormData?:
        | void
        | ((
            data: FormData
          ) => void | FormErrors<FV> | Promise<void | FormErrors<FV>>);
      submitJson?:
        | void
        | ((
            data: FV
          ) => void | FormErrors<FV> | Promise<void | FormErrors<FV>>);
    }
  >;

export function Form<FV extends FormValues = FormValues>({
  dialog,
  method = "post",
  action,
  submitFormData,
  submitJson,
  validateOnBlur,
  validateOnChange,
  autoComplete = false,
  ...props
}: FormProps<FV>): React.ReactElement {
  if (!submitFormData && !submitJson)
    throw new Error(
      "Must supply a submit method prop of either `submitFormData` or `submitJson`."
    );

  return (
    <form
      {...props}
      data-fgb="form"
      // skip built-in form validation if we're running JS in the client environment
      // otherwise if prerendering on the server, we fallback to built-in form validation so things work okay in js-less env
      noValidate={typeof window !== undefined}
      autoComplete={autoComplete ? "on" : "off"}
      method={dialog ? "dialog" : method}
      action={action}
      onChange={
        validateOnChange
          ? validationEffectHandler<React.ChangeEvent<HTMLFormElement>>(
              // @ts-expect-error - later
              validateOnChange,
              props.onChange
            )
          : undefined
      }
      onBlur={
        validateOnBlur
          ? validationEffectHandler<React.ChangeEvent<HTMLFormElement>>(
              // @ts-expect-error - later
              validateOnBlur,
              props.onBlur
            )
          : undefined
      }
      onSubmit={(event) => {
        const form = event.target as HTMLFormElement;
        event.preventDefault();
        if (
          validateForm(form, validateOnChange || validateOnBlur || undefined)
        ) {
          const submit = submitFormData
            ? // FormData is the preferred, browser native way, but may not be ideal in all instances
              submitFormData(getFormValuesAsFormData(form))
            : submitJson!(getFormValuesAsJson(form));
          (submit && submit instanceof Promise
            ? submit
            : Promise.resolve(submit)
          ).then((formErrors) => {
            if (!formErrors) return;
            for (const name of Object.keys(formErrors))
              setFormFieldError(
                form,
                name,
                // @ts-expect-error - this is okay
                formErrors[name]
              );
          });
        }
      }}
    />
  );
}
