import * as React from "react";
import { Option } from "../core/types";
import { Fieldset } from "./Fieldset";
import { Input, BaseInputProps } from "./Input";
import { InlineLabel } from "./Label";

export type RadioGroupType = {
  type: "radiogroup";
  options: Option[] | string[];
  label: string;
  defaultChecked?: string;
};

export type RadioGroupProps = BaseInputProps & RadioGroupType;

export function RadioGroup({
  type,
  name,
  options,
  label,
  defaultChecked,
  ...props
}: RadioGroupProps): React.ReactElement {
  return (
    <Fieldset label={label} name={name} {...props}>
      {options.map((opt) => (
        <InlineLabel label={typeof opt === "string" ? opt : opt.name}>
          <Input
            key={typeof opt === "string" ? opt : opt.id}
            type="radio"
            name={name}
            value={typeof opt === "string" ? opt : String(opt.id)}
            data-group={name}
            defaultChecked={
              !!defaultChecked &&
              defaultChecked === (typeof opt === "string" ? opt : opt.id)
            }
          />
        </InlineLabel>
      ))}
    </Fieldset>
  );
}
