import * as React from "react";
import { Option } from "../core/types";
declare type TextTypeProps = {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    spellcheck?: boolean;
};
export declare type TextInputProps = {
    type: "text";
    autoComplete?: string;
    defaultValue?: string;
    options?: string[] | Option[];
} & TextTypeProps;
export declare type TelInputProps = {
    type: "tel";
    options?: string[] | Option[];
} & TextTypeProps;
export declare type ColorInputProps = {
    type: "color";
    autoComplete?: string;
    defaultValue?: string;
    options?: string[] | Option[];
};
export declare type UrlInputProps = {
    type: "url";
    defaultValue?: string;
    options?: string[] | Option[];
} & TextTypeProps;
export declare type PasswordInputProps = {
    type: "password";
    autoComplete?: "on" | "off" | "current-password" | "new-password";
    defaultValue?: string;
} & TextTypeProps;
export declare type SearchInputProps = {
    type: "search";
    defaultValue?: string;
    options?: string[] | Option[];
} & TextTypeProps;
export declare type EmailInputProps = {
    type: "email";
    multiple?: boolean;
    autoComplete?: "on" | "off" | "email";
    defaultValue?: string;
    options?: string[] | Option[];
} & TextTypeProps;
declare type NumberTypeProps = {
    min?: number;
    max?: number;
    step?: number;
};
export declare type NumberInputProps = {
    type: "number";
    defaultValue?: number;
    options?: number[];
} & NumberTypeProps;
export declare type NumericInputProps = {
    type: "numeric";
    defaultValue?: number;
    options?: number[];
};
export declare type RangeInputProps = {
    type: "range";
    defaultValue?: number;
    options?: number[];
} & NumberTypeProps;
declare type DateTypeProps = {
    min?: string;
    max?: string;
    step?: number;
};
export declare type DateInputProps = {
    type: "date";
    defaultValue?: string;
    options?: string[] | Option[];
} & DateTypeProps;
export declare type TimeInputProps = {
    type: "time";
    defaultValue?: string;
    options?: string[] | Option[];
} & DateTypeProps;
export declare type DatetimeInputProps = {
    type: "datetime-local";
    defaultValue?: string;
    options?: string[] | Option[];
} & DateTypeProps;
export declare type MonthInputProps = {
    type: "month";
    defaultValue?: string;
    options?: string[] | Option[];
} & DateTypeProps;
export declare type WeekInputProps = {
    type: "week";
    defaultValue?: string;
    options?: string[] | Option[];
} & DateTypeProps;
export declare type FileInputProps = {
    type: "file";
    accept?: string;
    multiple?: boolean;
};
export declare type CheckboxInputProps = {
    type: "checkbox";
    value?: string;
    defaultChecked?: boolean;
};
export declare type RadioInputProps = {
    type: "radio";
    value: string;
    defaultChecked?: boolean;
};
export declare type HiddenInputProps = {
    type: "hidden";
    defaultValue: string;
};
export declare type InputTypes = TextInputProps | TelInputProps | SearchInputProps | UrlInputProps | EmailInputProps | PasswordInputProps | NumberInputProps | NumericInputProps | RangeInputProps | FileInputProps | CheckboxInputProps | RadioInputProps | DateInputProps | TimeInputProps | DatetimeInputProps | MonthInputProps | WeekInputProps | ColorInputProps | HiddenInputProps;
export declare type BaseInputProps = {
    name: string;
    required?: boolean;
    placeholder?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    id?: string;
    tabIndex?: number;
    autocorrect?: boolean;
};
export declare type InputProps = BaseInputProps & InputTypes & Omit<React.InputHTMLAttributes<HTMLInputElement>, "aria-describedby" | "type">;
export declare function Input({ type, options, ...props }: InputProps): React.ReactElement;
export {};
