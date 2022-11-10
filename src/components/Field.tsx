import * as React from "react";
import { Input, InputProps } from "./Input";
import { Group, GroupProps } from "./Group";
import { Select, SelectFieldProps } from "./Select";
import { Textarea, TextareaFieldProps } from "./Textarea";
import { Fieldset, FieldsetProps } from "./Fieldset";
import { wrapWithFieldValidation } from "../core/wrapWithFieldValidation";
import { ValidateFn } from "../core";

export type FieldProps = FieldsetProps &
  (SelectFieldProps | TextareaFieldProps | InputProps | GroupProps) & {
    validateOnChange?: ValidateFn | boolean;
    validateOnBlur?: ValidateFn | boolean;
    inputClassName?: undefined | string;
    inputStyle?: React.CSSProperties;
    inputLabelClassName?: undefined | string;
    inputLabelStyle?: React.CSSProperties;
  };

export function Field(props: FieldProps): React.ReactElement {
  const validationProps = wrapWithFieldValidation(
    props.validateOnChange ? "onChange" : "onBlur",
    typeof props.validateOnChange === "function"
      ? props.validateOnChange
      : typeof props.validateOnBlur === "function"
      ? props.validateOnBlur
      : undefined,
    // @ts-expect-error - later
    props[props.validateOnChange ? "onChange" : "onBlur"]
  ) as Record<string, unknown>; // casting to generic record for simplicity. should probably fix someday
  const {
    label,
    hint,
    className,
    style,
    hintClassName,
    hintStyle,
    labelClassName,
    labelStyle,
    inputClassName,
    inputStyle,
    inputLabelClassName,
    inputLabelStyle,
    name,
    type = "text",
    ...inputProps
  } = props;

  return (
    <Fieldset
      label={label}
      name={name}
      hint={hint}
      className={className}
      style={style}
      hintStyle={hintStyle}
      hintClassName={hintClassName}
      labelStyle={labelStyle}
      labelClassName={labelClassName}
      data-fgb-type={type}
      group={type === "radios" || type === "checkboxes"}
    >
      {type === "select" ? (
        // @ts-expect-error - later
        <Select
          {...inputProps}
          {...validationProps}
          name={name}
          className={inputClassName}
          style={inputStyle}
        />
      ) : type === "textarea" ? (
        // @ts-expect-error - later
        <Textarea
          {...inputProps}
          {...validationProps}
          name={name}
          className={inputClassName}
          style={inputStyle}
        />
      ) : type === "checkboxes" || type === "radios" ? (
        // @ts-expect-error - later
        <Group
          {...inputProps}
          {...validationProps}
          type={type}
          name={name}
          className={inputLabelClassName}
          style={inputLabelStyle}
          inputClassName={inputClassName}
          inputStyle={inputStyle}
        />
      ) : (
        // @ts-expect-error - later
        <Input
          {...inputProps}
          {...validationProps}
          name={name}
          type={type}
          className={inputClassName}
          style={inputStyle}
        />
      )}
    </Fieldset>
  );
}
