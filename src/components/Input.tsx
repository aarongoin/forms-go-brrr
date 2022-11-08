import * as React from "react";
import { Option } from "../core/types";

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
  options?: string[] | Option[];
} & TextTypeProps;

export type TelInputProps = {
  type: "tel";
  options?: string[] | Option[];
} & TextTypeProps;

export type ColorInputProps = {
  type: "color";
  autocomplete?: string;
  defaultValue?: string;
  options?: string[] | Option[];
};

export type UrlInputProps = {
  type: "url";
  defaultValue?: string;
  options?: string[] | Option[];
} & TextTypeProps;

export type PasswordInputProps = {
  type: "password";
  autocomplete?: "on" | "off" | "current-password" | "new-password";
  defaultValue?: string;
} & TextTypeProps;

export type SearchInputProps = {
  type: "search";
  defaultValue?: string;
  options?: string[] | Option[];
  // Can use `::-webkit-search-cancel-button` to style the clear search button provided by webkit browsers
} & TextTypeProps;

export type EmailInputProps = {
  type: "email";
  multiple?: boolean;
  autocomplete?: "on" | "off" | "email";
  defaultValue?: string;
  options?: string[] | Option[];
} & TextTypeProps;

type NumberTypeProps = {
  min?: number;
  max?: number;
  step?: number;
};

export type NumberInputProps = {
  type: "number";
  defaultValue?: number;
  options?: number[];
} & NumberTypeProps;

export type NumericInputProps = {
  type: "numeric";
  defaultValue?: number;
  options?: number[];
};

export type RangeInputProps = {
  type: "range";
  defaultValue?: number;
  options?: number[]; // for tick marks
} & NumberTypeProps;

type DateTypeProps = {
  min?: string;
  max?: string;
  step?: number;
};

export type DateInputProps = {
  type: "date";
  defaultValue?: string;
  options?: string[] | Option[];
  // value YYYY-MM-DD
  // step is in days
} & DateTypeProps;

export type TimeInputProps = {
  type: "time";
  defaultValue?: string;
  options?: string[] | Option[];
  // value hh:mm
  // step is in seconds
} & DateTypeProps;

export type DatetimeInputProps = {
  type: "datetime-local";
  defaultValue?: string;
  options?: string[] | Option[];
  // value YYYY-MM-DDThh:mm
  // step is in seconds
} & DateTypeProps;

export type MonthInputProps = {
  type: "month";
  defaultValue?: string;
  options?: string[] | Option[];
  // value YYYY-MM
  // step is in months
} & DateTypeProps;

export type WeekInputProps = {
  type: "week";
  defaultValue?: string;
  options?: string[] | Option[];
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

export type HiddenInputProps = {
  type: "hidden";
  defaultValue: string;
};

export type InputTypes =
  | TextInputProps
  | TelInputProps
  | SearchInputProps
  | UrlInputProps
  | EmailInputProps
  | PasswordInputProps
  | NumberInputProps
  | NumericInputProps
  | RangeInputProps
  | FileInputProps
  | CheckboxInputProps
  | RadioInputProps
  | DateInputProps
  | TimeInputProps
  | DatetimeInputProps
  | MonthInputProps
  | WeekInputProps
  | ColorInputProps
  | HiddenInputProps;

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
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "aria-describedby" | "type"
  >;

export function Input({
  type,
  // @ts-expect-error - it's okay. Not every input type accepts this, but we can still hande them as one
  options,
  ...props
}: InputProps): React.ReactElement {
  const input = (
    <input
      tabIndex={0}
      {...(type === "numeric"
        ? {
            type: "text",
            inputMode: "numeric",
            pattern: "[0-9]*",
          }
        : { type })}
      {...props}
      aria-describedby={`${props.name}-hint`}
      data-fgb="input"
      list={
        Array.isArray(options) && options.length
          ? `${props.name}-options`
          : undefined
      }
    />
  );
  return Array.isArray(options) && options.length ? (
    <React.Fragment>
      {input}
      <datalist id={`${props.name}-options`}>
        {options.map((o) =>
          typeof o === "object" ? (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ) : (
            <option key={o} value={o}>
              {o}
            </option>
          )
        )}
      </datalist>
    </React.Fragment>
  ) : (
    input
  );
}
