import * as React from "react";
import { getErrorMessage } from "./errorMessages";
import { getFormFieldValue } from "./getFormFieldValue";
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
    if (!error) {
      const value = getFormFieldValue<V>(input.form!, input.name);
      for (const validator of validators) {
        error = validator(value);
        if (error) break;
      }
    }

    input.setCustomValidity(error);
    const hint = input
      .closest(".fgb-Label, .fgb-Fieldset")
      ?.querySelector(`#${input.name}-hint`);
    if (hint) hint.textContent = error;
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
