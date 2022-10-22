import * as React from "react";

type TextTypeProps = {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  spellcheck?: boolean;
};

export type TextInputProps = {
  type: "text";
  autocomplete?: string;
  defaultValue?: string;
} & TextTypeProps;

export type TelInputProps = {
  type: "tel";
} & TextTypeProps;

export type UrlInputProps = {
  type: "url";
  defaultValue?: string;
} & TextTypeProps;

export type PasswordInputProps = {
  type: "password";
  autocomplete?: "on" | "off" | "current-password" | "new-password";
  defaultValue?: string;
} & TextTypeProps;

export type SearchInputProps = {
  type: "search";
  defaultValue?: string;
  // Can use `::-webkit-search-cancel-button` to style the clear search button provided by webkit browsers
} & TextTypeProps;

export type EmailInputProps = {
  type: "email";
  multiple?: boolean;
  autocomplete?: "on" | "off" | "email";
  defaultValue?: string;
} & TextTypeProps;

type NumberTypeProps = {
  min?: number;
  max?: number;
  step?: number;
};

export type NumberInputProps = {
  type: "number";
  pattern?: string;
  defaultValue?: number;
} & NumberTypeProps;

export type RangeInputProps = {
  type: "range";
  defaultValue?: number;
} & NumberTypeProps;

type DateTypeProps = {
  min?: string;
  max?: string;
  step?: number;
};

export type DateInputProps = {
  type: "date";
  defaultValue?: string;
  // value YYYY-MM-DD
  // step is in days
} & DateTypeProps;

export type TimeInputProps = {
  type: "time";
  defaultValue?: string;
  // value hh:mm
  // step is in seconds
} & DateTypeProps;

export type DatetimeInputProps = {
  type: "datetime-local";
  defaultValue?: string;
  // value YYYY-MM-DDThh:mm
  // step is in seconds
} & DateTypeProps;

export type MonthInputProps = {
  type: "month";
  defaultValue?: string;
  // value YYYY-MM
  // step is in months
} & DateTypeProps;

export type WeekInputProps = {
  type: "week";
  defaultValue?: string;
  // value YYYY-Www
  // step is in weeks
} & DateTypeProps;

export type FileInputProps = {
  type: "file";
  accept?: string;
  multiple?: boolean;
};

export type CheckboxInputProps = {
  type: "checkbox";
  value?: string; // defaults to "on" if selected, unsubmitted if off
  defaultChecked?: boolean;
};

export type RadioInputProps = {
  type: "radio";
  value: string;
  defaultChecked?: boolean;
};

export type InputTypes =
  | TextInputProps
  | TelInputProps
  | SearchInputProps
  | UrlInputProps
  | EmailInputProps
  | PasswordInputProps
  | NumberInputProps
  | RangeInputProps
  | FileInputProps
  | CheckboxInputProps
  | RadioInputProps
  | DateInputProps
  | TimeInputProps
  | DatetimeInputProps
  | MonthInputProps
  | WeekInputProps;

export type BaseInputProps = {
  name: string;
  required?: boolean;
  placeholder?: string;
  autofocus?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  id?: string;
  tabIndex?: number;
  autocorrect?: boolean; // safari only
};

export type InputProps = BaseInputProps &
  InputTypes &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "aria-describedby">;

export function Input(props: InputProps): React.ReactElement {
  return (
    <input
      tabIndex={0}
      {...props}
      aria-describedby={`${props.name}-hint`}
      className={"brrr-Input".concat(
        props.className ? " " : "",
        props.className || ""
      )}
    />
  );
}
