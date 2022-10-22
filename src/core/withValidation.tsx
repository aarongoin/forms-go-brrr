import * as React from "react";
import { getErrorMessage } from "./errorMessages";
import { getFieldValue } from "./getFieldValue";
import {
  FieldInputElement,
  FieldValues,
  ValidationEvents,
  ValidateFn,
} from "./types";
import { wrapWithFieldValidation } from "./wrapWithFieldValidation";

export function withValidation<E extends ValidationEvents>(onEvent: E) {
  // return HOC for binding an input component to a validation function
  return <
    I extends FieldInputElement,
    V extends FieldValues = FieldValues,
    P extends Record<string, unknown> = Record<string, unknown>
  >(
    Cmp: React.ComponentType<P & { [K in E]: React.HTMLAttributes<I>[K] }>,
    validators: ValidateFn<V> | ValidateFn<V>[]
  ) => {
    const validatorList = Array.isArray(validators) ? validators : [validators];
    // return component which can be rendered with the validation
    return function Validated({
      validators: _validators,
      ...props
    }: P & { [K in E]?: React.HTMLAttributes<I>[K] } & {
      validators?: Array<ValidateFn<V>>;
    }) {
      return (
        // render the component and bind it's handler to the validation function
        // @ts-expect-error - fun with generics
        <Cmp
          {...props}
          {...wrapWithFieldValidation(
            onEvent,
            _validators ? validatorList.concat(_validators) : validatorList,
            // @ts-expect-error - maybe later
            props[onEvent]
          )}
        />
      );
    };
  };
}

export const withValidationOnChange = withValidation("onChange");
export const withValidationOnBlur = withValidation("onBlur");
