import React from "react";
import { getFieldValue } from "./getFieldValue";
import { setFieldError } from "./setFieldError";
import { setFieldValue } from "./setFieldValue";
import {
  FieldInputElement,
  FormHandler,
  FormValues,
  isFormElement,
} from "./types";

export function validationEffectHandler<
  E extends React.ChangeEvent<HTMLElement> | React.FocusEvent<HTMLElement>,
  FV extends FormValues = FormValues
>(
  validator: FormHandler<FV>,
  onEvent?: React.EventHandler<E>
): React.EventHandler<E> {
  return (event: E) => {
    const form = isFormElement(event.target)
      ? event.target
      : "form" in event.target
      ? // @ts-expect-error - we just did the check!
        event.target.form!
      : null; // TODO: search for form?
    if (!form)
      throw new Error(
        "Expected to find a form element attached to wrapped event target."
      );
    const formErrors = validator(
      (name) => getFieldValue(form, name),
      (name, value) => setFieldValue(form, name, value)
    );
    if (formErrors)
      for (const name of Object.keys(formErrors))
        setFieldError(form, name, formErrors[name]);
    return onEvent?.(event);
  };
}
