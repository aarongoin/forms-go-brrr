import * as React from "react";
import { Checkboxes, CheckboxesType } from "./Checkboxes";
import { Input, BaseInputProps, InputTypes } from "./Input";
import { RadioGroup, RadioGroupType } from "./RadioGroup";
import { Select, SelectType } from "./Select";
import { Textarea, TextareaType } from "./Textarea";
import { Label, InlineLabel, LabelProps } from "./Label";

const inlineFieldTypes = ["radio", "checkbox"];

export type FieldProps = LabelProps &
  BaseInputProps &
  (InputTypes | SelectType | TextareaType | CheckboxesType | RadioGroupType) & {
    validate?: "onInput" | "onChange" | "onBlur";
    inputClassName?: undefined | string;
  };

export function Field(props: FieldProps): React.ReactElement {
  if (props.type === "checkboxes") {
    return <Checkboxes {...props} />;
  }
  if (props.type === "radiogroup") {
    return <RadioGroup {...props} />;
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
        <Select {...props} className={inputClassName} />
      ) : props.type === "textarea" ? (
        <Textarea {...props} className={inputClassName} />
      ) : (
        <Input {...props} className={inputClassName} />
      )}
    </LabelCmp>
  );
}
