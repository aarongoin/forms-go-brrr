import * as React from "react";
import { getErrorMessage } from "./errorMessages";
import { getFieldValue } from "./getFieldValue";
import { FieldInputElement, FieldValues } from "./types";

export type ValidateFn<V extends FieldValues = FieldValues> = (
  value: V
) => string;

export type ValidationEvents = "onChange" | "onBlur";

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
    return function Validated(
      props: P & { [K in E]?: React.HTMLAttributes<I>[K] }
    ) {
      return (
        // render the component and bind it's handler to the validation function
        <Cmp
          {...props}
          {...{
            [onEvent]: (event: React.ChangeEvent<I> | React.FocusEvent<I>) => {
              const input = event.target;
              let error = !input.checkValidity() ? getErrorMessage(input) : "";
              if (!error) {
                const value = getFieldValue<V>(input.form!, input.name);
                for (const validator of validatorList) {
                  error = validator(value);
                  if (error) break;
                }
              }

              input.setCustomValidity(error);
              const hint = input.closest(`.${input.name}-hint`);
              if (hint) hint.textContent = error;
              // @ts-expect-error - oh well
              return props[onEvent]?.(event);
            },
          }}
        />
      );
    };
  };
}

export const withValidationOnChange = withValidation("onChange");
export const withValidationOnBlur = withValidation("onBlur");
