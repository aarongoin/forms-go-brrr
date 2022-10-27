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
  validators: ValidateFn<V>[],
  outerHandler?: (event: React.ChangeEvent<I> | React.FocusEvent<I>) => unknown
) {
  const validateInput = (input: I): boolean => {
    let error = !input.validity.valid ? getErrorMessage(input) : "";
    const value = getFormFieldValue<V>(input.form!, input.name);
    for (const validator of validators) {
      error = validator(value) || error;
      if (error) break;
    }
    setFormFieldError(input.form!, input.name, error);
    return !!error;
  };
  return {
    [onEvent]: (event: React.ChangeEvent<I> | React.FocusEvent<I>) => {
      validateInput(event.target);
      return outerHandler?.(event);
    },
    onInvalid: (event: React.InvalidEvent<I>) => {
      if (validateInput(event.target)) event.preventDefault();
    },
  };
}
