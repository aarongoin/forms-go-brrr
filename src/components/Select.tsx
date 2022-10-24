import * as React from "react";
import { Option } from "../core/types";
import { BaseInputProps } from "./Input";

export type SelectType = {
  type: "select";
  options: Option[] | string[];
  defaultSelected?: string | string[];
  multiple?: boolean;
  size?: number;
  renderOption?: (opt: Option | string) => React.ReactNode;
  optionClassName?: string | undefined;
};

export type SelectProps = BaseInputProps &
  SelectType &
  React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({
  options,
  type,
  defaultSelected,
  name,
  renderOption,
  className,
  optionClassName,
  ...props
}: SelectProps): React.ReactElement {
  const finalOptionClassName = "fgb-Field-option".concat(
    optionClassName ? " " : "",
    optionClassName || ""
  );
  return (
    <select
      name={name}
      tabIndex={0}
      aria-describedby={`${name}-hint`}
      {...props}
      className={"fgb-Select".concat(className ? " " : "", className || "")}
    >
      {options.map((opt) => (
        <option
          key={typeof opt === "string" ? opt : opt.id}
          value={typeof opt === "string" ? opt : opt.id}
          className={finalOptionClassName}
          defaultChecked={
            !!defaultSelected &&
            (props.multiple && Array.isArray(defaultSelected)
              ? defaultSelected.some(
                  typeof opt === "string"
                    ? (e) => e === opt
                    : (e) => e === opt.id
                )
              : defaultSelected === (typeof opt === "string" ? opt : opt.id))
          }
        >
          {renderOption
            ? renderOption(opt)
            : typeof opt === "string"
            ? opt
            : opt.name}
        </option>
      ))}
    </select>
  );
}
