import * as React from "react";
import { Option, Optional } from "../core/types";
import { BaseInputProps } from "./Input";

export type SelectType = {
  type: "select";
  options: Option[] | string[];
  defaultSelected?: string | string[];
  multiple?: boolean;
};
export type SelectFieldProps = BaseInputProps &
  SelectType &
  React.SelectHTMLAttributes<HTMLSelectElement>;

export type SelectProps = BaseInputProps &
  Optional<SelectType, "type"> &
  React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({
  options,
  type,
  defaultSelected,
  name,
  ...props
}: SelectProps): React.ReactElement {
  return (
    <select
      name={name}
      tabIndex={0}
      aria-describedby={`${name}-hint`}
      {...props}
      data-fgb="input"
    >
      {options.map((opt) => {
        const { value, label } =
          typeof opt === "object" ? opt : { label: opt, value: opt };
        return (
          <option
            key={value}
            value={value}
            defaultChecked={
              !!defaultSelected &&
              (props.multiple && Array.isArray(defaultSelected)
                ? defaultSelected.some((e) => e == value)
                : defaultSelected == value)
            }
          >
            {label}
          </option>
        );
      })}
    </select>
  );
}
