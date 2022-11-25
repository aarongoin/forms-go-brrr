import * as React from "react";
import { Option, ValidateFn } from "../core";
declare type FieldSharedProps = {
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
declare type SelectFieldProps = {
    type: "select";
    options: Option[] | string[];
    defaultSelected?: string | string[];
    multiple?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "aria-describedby">;
declare type RadioGroupFieldProps = {
    type: "radios";
    options: Option[] | string[];
    defaultChecked?: string | string[];
    inputClassName?: undefined | string;
    inputStyle?: React.CSSProperties;
} & FieldSharedProps & Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "name">;
declare type CheckboxGroupFieldProps = {
    type: "checkboxes";
    options: Option[] | string[];
    defaultChecked?: string | string[];
    inputClassName?: undefined | string;
    inputStyle?: React.CSSProperties;
} & FieldSharedProps & Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "name">;
declare type TextareaFieldProps = {
    type: "textarea";
    minRows?: number;
    maxRows?: number;
    spellcheck?: boolean;
    autosize?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLTextAreaElement>, "aria-describedby">;
declare type TextFieldProps = {
    type: "text";
    autoComplete?: string;
    defaultValue?: string;
    options?: string[] | Option[];
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    spellcheck?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type TelFieldProps = {
    type: "tel";
    options?: string[] | Option[];
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    spellcheck?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type ColorFieldProps = {
    type: "color";
    autoComplete?: string;
    defaultValue?: string;
    options?: string[] | Option[];
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type UrlFieldProps = {
    type: "url";
    defaultValue?: string;
    options?: string[] | Option[];
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    spellcheck?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type PasswordFieldProps = {
    type: "password";
    autoComplete?: "on" | "off" | "current-password" | "new-password";
    defaultValue?: string;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    spellcheck?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type SearchFieldProps = {
    type: "search";
    defaultValue?: string;
    options?: string[] | Option[];
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    spellcheck?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type EmailFieldProps = {
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
declare type NumberFieldProps = {
    type: "number";
    defaultValue?: number;
    options?: number[];
    min?: number;
    max?: number;
    step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type NumericFieldProps = {
    type: "numeric";
    defaultValue?: number;
    options?: number[];
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type RangeFieldProps = {
    type: "range";
    defaultValue?: number;
    options?: number[];
    min?: number;
    max?: number;
    step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type DateFieldProps = {
    type: "date";
    defaultValue?: string;
    options?: string[] | Option[];
    min?: string;
    max?: string;
    step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type TimeFieldProps = {
    type: "time";
    defaultValue?: string;
    options?: string[] | Option[];
    min?: string;
    max?: string;
    step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type DatetimeFieldProps = {
    type: "datetime-local";
    defaultValue?: string;
    options?: string[] | Option[];
    min?: string;
    max?: string;
    step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type MonthFieldProps = {
    type: "month";
    defaultValue?: string;
    options?: string[] | Option[];
    min?: string;
    max?: string;
    step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type WeekFieldProps = {
    type: "week";
    defaultValue?: string;
    options?: string[] | Option[];
    min?: string;
    max?: string;
    step?: number;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type FileFieldProps = {
    type: "file";
    accept?: string;
    multiple?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type CheckboxFieldProps = {
    type: "checkbox";
    value?: string;
    defaultChecked?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type RadioFieldProps = {
    type: "radio";
    value: string;
    defaultChecked?: boolean;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
declare type HiddenFieldProps = {
    type: "hidden";
    defaultValue: string;
} & FieldSharedProps & Omit<React.SelectHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
export declare type FieldProps = SelectFieldProps | TextareaFieldProps | TextFieldProps | TelFieldProps | SearchFieldProps | UrlFieldProps | EmailFieldProps | PasswordFieldProps | NumberFieldProps | NumericFieldProps | RangeFieldProps | FileFieldProps | CheckboxFieldProps | RadioFieldProps | DateFieldProps | TimeFieldProps | DatetimeFieldProps | MonthFieldProps | WeekFieldProps | ColorFieldProps | HiddenFieldProps | RadioGroupFieldProps | CheckboxGroupFieldProps;
export declare function Field(props: FieldProps): React.ReactElement;
export {};
