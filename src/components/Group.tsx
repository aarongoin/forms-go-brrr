import * as React from "react";
import { Option } from "../core/types";
import { Fieldset, FieldsetProps } from "./Fieldset";
import { Input, BaseInputProps } from "./Input";

export type GroupType = {
  type: "radios" | "checkboxes";
  options: Option[] | string[];
  defaultChecked?: string | string[];
};

export type GroupProps = BaseInputProps &
  GroupType &
  FieldsetProps & {
    inputClassName?: undefined | string;
    inputStyle?: React.CSSProperties;
  };

export function Group({
  type,
  name,
  options,
  label,
  defaultChecked,
  ...props
}: GroupProps): React.ReactElement[] {
  return options.map((opt) => {
    const { value, label } =
      typeof opt === "object" ? opt : { label: opt, value: opt };
    const id = `${name}-${value}`;
    return (
      <Fieldset name={id} label={label} key={value}>
        <Input
          {...props}
          type={type.startsWith("c") ? "checkbox" : "radio"}
          name={name}
          id={id}
          value={String(value)}
          data-fgb-group={name}
          defaultChecked={
            Array.isArray(defaultChecked)
              ? defaultChecked.some((e) => e === value)
              : defaultChecked === value
          }
        />
      </Fieldset>
    );
  });
}
