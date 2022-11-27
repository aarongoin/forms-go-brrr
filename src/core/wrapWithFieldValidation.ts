import * as React from "react";
import { getErrorMessage } from "./errorMessages";
import { getFormFieldValue } from "./getFormFieldValue";
import { setFormFieldError } from "./setFormFieldError";
import {
  FieldInputElement,
  FieldValue,
  ValidationEvents,
  ValidateFn,
} from "./types";

export function wrapWithFieldValidation<
  I extends FieldInputElement,
  V extends FieldValue = FieldValue
>(
  onEvent: ValidationEvents,
  validator?: ValidateFn<V>,
  outerHandler?: (event: React.ChangeEvent<I> | React.FocusEvent<I>) => unknown
) {
  const validateInput = (input: I): boolean => {
    let error = !input.validity.valid ? getErrorMessage(input) : "";
    const value = getFormFieldValue<V>(input.form!, input.name);
    error = validator?.(value) || error;
    setFormFieldError(input.form!, input.name, error);
    return !!error;
  };
  return {
    [onEvent]: (event: React.ChangeEvent<I> | React.FocusEvent<I>) => {
      // delay validation after blur in case user is attempting to click something else in the UI
      // otherwise the potential error being rendered will shift the UI and cause mis-clicks
      setTimeout(validateInput, onEvent === "onChange" ? 0 : 120, event.target);
      return outerHandler?.(event);
    },
    onInvalid: (event: React.InvalidEvent<I>) => {
      if (validateInput(event.target)) event.preventDefault();
    },
  };
}
