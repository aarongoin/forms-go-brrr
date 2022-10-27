import * as React from "react";
import { Option } from "../core/types";
import { Fieldset, FieldsetProps } from "./Fieldset";
import { Input, BaseInputProps } from "./Input";
import { InlineLabel } from "./Label";

export type RadioGroupType = {
  type: "radiogroup";
  options: Option[] | string[];
  defaultChecked?: string;
};

export type RadioGroupProps = BaseInputProps & RadioGroupType & FieldsetProps;

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
        <InlineLabel label={typeof opt === "string" ? opt : opt.label}>
          <Input
            key={typeof opt === "string" ? opt : opt.value}
            type="radio"
            name={name}
            value={typeof opt === "string" ? opt : String(opt.value)}
            data-group={name}
            defaultChecked={
              !!defaultChecked &&
              defaultChecked === (typeof opt === "string" ? opt : opt.value)
            }
          />
        </InlineLabel>
      ))}
    </Fieldset>
  );
}
