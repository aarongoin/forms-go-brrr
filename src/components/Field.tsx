import * as React from "react";
import { Checkboxes, CheckboxesProps } from "./Checkboxes";
import { Input, InputProps } from "./Input";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";
import { Select, SelectProps } from "./Select";
import { Textarea, TextareaProps } from "./Textarea";
import { Label, InlineLabel, LabelProps } from "./Label";
import { ValidateFn, wrapWithFieldValidation } from "../core";

const inlineFieldTypes = ["radio", "checkbox"];

type FieldsetFieldProps = CheckboxesProps | RadioGroupProps;

type LabelledFieldProps = (SelectProps | TextareaProps | InputProps) &
  LabelProps;

export type FieldProps = (FieldsetFieldProps | LabelledFieldProps) & {
  validate?: "onChange" | "onBlur";
  validator?: ValidateFn;
  validators?: ValidateFn[];
  inputClassName?: undefined | string;
};

export function Field(props: FieldProps): React.ReactElement {
  const validationProps = props.validate
    ? (wrapWithFieldValidation(
        props.validate,
        props.validators || (props.validator ? [props.validator] : []),
        // @ts-expect-error - maybe later
        props[props.validate]
      ) as Record<string, unknown>) // casting to generic record for simplicity. should probably fix someday
    : null;
  if (props.type === "checkboxes") {
    return <Checkboxes {...props} {...validationProps} />;
  }
  if (props.type === "radiogroup") {
    return <RadioGroup {...props} {...validationProps} />;
  }
  const { label, hint, className, inputClassName, ...inputProps } = props;

  const LabelCmp = inlineFieldTypes.includes(props.type) ? InlineLabel : Label;

  return (
    <LabelCmp
      label={label}
      name={inputProps.name}
      hint={hint}
      className={className}
    >
      {props.type === "select" ? (
        <Select {...props} className={inputClassName} {...validationProps} />
      ) : props.type === "textarea" ? (
        <Textarea {...props} className={inputClassName} {...validationProps} />
      ) : (
        <Input {...props} className={inputClassName} {...validationProps} />
      )}
    </LabelCmp>
  );
}
