import * as React from "react";
import { Input } from "./Input";
import { Group } from "./Group";
import { Select } from "./Select";
import { Textarea } from "./Textarea";
import { Fieldset } from "./Fieldset";
import { wrapWithFieldValidation } from "../core/wrapWithFieldValidation";
import { Option, ValidateFn } from "../core";

type FieldSharedProps = {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  id?: string;
  tabIndex?: number;
  autocorrect?: boolean;
  hint?: string | null;
  validateOnChange?: ValidateFn | boolean;
  validateOnBlur?: ValidateFn | boolean;
  inputClassName?: undefined | string;
  inputStyle?: React.CSSProperties;
  inputLabelClassName?: undefined | string;
  inputLabelStyle?: React.CSSProperties;
  hintClassName?: undefined | string;
  labelClassName?: undefined | string;
  hintStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
};

type SelectFieldProps = {
  type: "select";
  options: Option[] | string[];
  defaultSelected?: string | string[];
  multiple?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "aria-describedby">;

type RadioGroupFieldProps = {
  type: "radios";
  options: Option[] | string[];
  defaultChecked?: string | string[];
  inputClassName?: undefined | string;
  inputStyle?: React.CSSProperties;
} & FieldSharedProps & Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "name">;

type CheckboxGroupFieldProps = {
  type: "checkboxes";
  options: Option[] | string[];
  defaultChecked?: string | string[];
  inputClassName?: undefined | string;
  inputStyle?: React.CSSProperties;
} & FieldSharedProps & Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "name">;

type TextareaFieldProps = {
  type: "textarea";
  minRows?: number;
  maxRows?: number;
  spellcheck?: boolean;
  autosize?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLTextAreaElement>, "aria-describedby">;

type TextFieldProps = {
  type: "text";
  autoComplete?: string;
  defaultValue?: string;
  options?: string[] | Option[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  spellcheck?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type TelFieldProps = {
  type: "tel";
  options?: string[] | Option[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  spellcheck?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type ColorFieldProps = {
  type: "color";
  autoComplete?: string;
  defaultValue?: string;
  options?: string[] | Option[];
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type UrlFieldProps = {
  type: "url";
  defaultValue?: string;
  options?: string[] | Option[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  spellcheck?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type PasswordFieldProps = {
  type: "password";
  autoComplete?: "on" | "off" | "current-password" | "new-password";
  defaultValue?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  spellcheck?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type SearchFieldProps = {
  type: "search";
  defaultValue?: string;
  options?: string[] | Option[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  spellcheck?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type EmailFieldProps = {
  type: "email";
  multiple?: boolean;
  autoComplete?: "on" | "off" | "email";
  defaultValue?: string;
  options?: string[] | Option[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  spellcheck?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type NumberFieldProps = {
  type: "number";
  defaultValue?: number;
  options?: number[];
  min?: number;
  max?: number;
  step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type NumericFieldProps = {
  type: "numeric";
  defaultValue?: number;
  options?: number[];
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type RangeFieldProps = {
  type: "range";
  defaultValue?: number;
  options?: number[];
  min?: number;
  max?: number;
  step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type DateFieldProps = {
  type: "date";
  defaultValue?: string;
  options?: string[] | Option[];
  min?: string;
  max?: string;
  step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type TimeFieldProps = {
  type: "time";
  defaultValue?: string;
  options?: string[] | Option[];
  min?: string;
  max?: string;
  step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type DatetimeFieldProps = {
  type: "datetime-local";
  defaultValue?: string;
  options?: string[] | Option[];
  min?: string;
  max?: string;
  step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type MonthFieldProps = {
  type: "month";
  defaultValue?: string;
  options?: string[] | Option[];
  min?: string;
  max?: string;
  step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type WeekFieldProps = {
  type: "week";
  defaultValue?: string;
  options?: string[] | Option[];
  min?: string;
  max?: string;
  step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type FileFieldProps = {
  type: "file";
  accept?: string;
  multiple?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type CheckboxFieldProps = {
  type: "checkbox";
  value?: string;
  defaultChecked?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type RadioFieldProps = {
  type: "radio";
  value: string;
  defaultChecked?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

type HiddenFieldProps = {
  type: "hidden";
  defaultValue: string;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;

export type FieldProps =
  | SelectFieldProps
  | TextareaFieldProps
  | TextFieldProps
  | TelFieldProps
  | SearchFieldProps
  | UrlFieldProps
  | EmailFieldProps
  | PasswordFieldProps
  | NumberFieldProps
  | NumericFieldProps
  | RangeFieldProps
  | FileFieldProps
  | CheckboxFieldProps
  | RadioFieldProps
  | DateFieldProps
  | TimeFieldProps
  | DatetimeFieldProps
  | MonthFieldProps
  | WeekFieldProps
  | ColorFieldProps
  | HiddenFieldProps
  | RadioGroupFieldProps
  | CheckboxGroupFieldProps;

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
