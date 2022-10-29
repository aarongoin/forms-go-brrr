import * as React from "react";
import { Checkboxes, CheckboxesProps } from "./Checkboxes";
import { Input, InputProps } from "./Input";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";
import { Select, SelectFieldProps } from "./Select";
import { Textarea, TextareaFieldProps } from "./Textarea";
import { Label, InlineLabel, LabelProps } from "./Label";
import { ValidateFn, wrapWithFieldValidation } from "../core";

const inlineFieldTypes = ["radio", "checkbox"];

type FieldsetFieldProps = CheckboxesProps | RadioGroupProps;

type LabelledFieldProps = (SelectFieldProps | TextareaFieldProps | InputProps) &
  LabelProps;

export type FieldProps = (FieldsetFieldProps | LabelledFieldProps) & {
  validateOnChange?: ValidateFn;
  validateOnBlur?: ValidateFn;
  inputClassName?: undefined | string;
};

export function Field(props: FieldProps): React.ReactElement {
  const validationProps =
    props.validateOnChange || props.validateOnBlur
      ? (wrapWithFieldValidation(
          props.validateOnChange ? "onChange" : "onBlur",
          props.validateOnChange || props.validateOnBlur!,
          // @ts-expect-error - later
          props[props.validateOnChange ? "onChange" : "onBlur"]
        ) as Record<string, unknown>) // casting to generic record for simplicity. should probably fix someday
      : null;
  if (props.type === "checkboxes") {
    return <Checkboxes {...props} {...validationProps} />;
  }
  if (props.type === "radiogroup") {
    return <RadioGroup {...props} {...validationProps} />;
  }
  const { label, hint, className, inputClassName, ...inputProps } = props;

  const LabelCmp = inlineFieldTypes.includes(inputProps.type) ? InlineLabel : Label;

  return (
    <LabelCmp
      label={label}
      name={inputProps.name}
      hint={hint}
      className={className}
    >
      {inputProps.type === "select" ? (
        <Select
          {...inputProps}
          className={inputClassName}
          {...validationProps}
        />
      ) : inputProps.type === "textarea" ? (
        <Textarea
          {...inputProps}
          className={inputClassName}
          {...validationProps}
        />
      ) : (
        <Input
          {...inputProps}
          className={inputClassName}
          {...validationProps}
        />
      )}
    </LabelCmp>
  );
}
