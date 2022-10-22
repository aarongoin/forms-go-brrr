import * as React from "react";
declare type TextTypeProps = {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    spellcheck?: boolean;
};
export declare type TextInputProps = {
    type: "text";
    autocomplete?: string;
    defaultValue?: string;
} & TextTypeProps;
export declare type TelInputProps = {
    type: "tel";
} & TextTypeProps;
export declare type UrlInputProps = {
    type: "url";
    defaultValue?: string;
} & TextTypeProps;
export declare type PasswordInputProps = {
    type: "password";
    autocomplete?: "on" | "off" | "current-password" | "new-password";
    defaultValue?: string;
} & TextTypeProps;
export declare type SearchInputProps = {
    type: "search";
    defaultValue?: string;
} & TextTypeProps;
export declare type EmailInputProps = {
    type: "email";
    multiple?: boolean;
    autocomplete?: "on" | "off" | "email";
    defaultValue?: string;
} & TextTypeProps;
declare type NumberTypeProps = {
    min?: number;
    max?: number;
    step?: number;
};
export declare type NumberInputProps = {
    type: "number";
    pattern?: string;
    defaultValue?: number;
} & NumberTypeProps;
export declare type RangeInputProps = {
    type: "range";
    defaultValue?: number;
} & NumberTypeProps;
declare type DateTypeProps = {
    min?: string;
    max?: string;
    step?: number;
};
export declare type DateInputProps = {
    type: "date";
    defaultValue?: string;
} & DateTypeProps;
export declare type TimeInputProps = {
    type: "time";
    defaultValue?: string;
} & DateTypeProps;
export declare type DatetimeInputProps = {
    type: "datetime-local";
    defaultValue?: string;
} & DateTypeProps;
export declare type MonthInputProps = {
    type: "month";
    defaultValue?: string;
} & DateTypeProps;
export declare type WeekInputProps = {
    type: "week";
    defaultValue?: string;
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
export declare type InputTypes = TextInputProps | TelInputProps | SearchInputProps | UrlInputProps | EmailInputProps | PasswordInputProps | NumberInputProps | RangeInputProps | FileInputProps | CheckboxInputProps | RadioInputProps | DateInputProps | TimeInputProps | DatetimeInputProps | MonthInputProps | WeekInputProps;
export declare type BaseInputProps = {
    name: string;
    required?: boolean;
    placeholder?: string;
    autofocus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    id?: string;
    tabIndex?: number;
    autocorrect?: boolean;
};
export declare type InputProps = BaseInputProps & InputTypes & {
    className?: string | undefined;
};
export declare function Input(props: InputProps): React.ReactElement;
export {};
