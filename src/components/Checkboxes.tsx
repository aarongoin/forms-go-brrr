import * as React from "react";
import { Fieldset, FieldsetProps } from "./Fieldset";
import { Option, Optional } from "../core/types";
import { Input, BaseInputProps } from "./Input";
import { InlineLabel } from "./Label";

export type CheckboxesType = {
  type: "checkboxes";
  options: Option[] | string[];
  label: string;
  defaultChecked?: string[];
};

export type CheckboxesProps = BaseInputProps &
  Optional<CheckboxesType, "type"> &
  FieldsetProps;

export function Checkboxes({
  type,
  name,
  options,
  label,
  defaultChecked,
  ...props
}: CheckboxesProps): React.ReactElement {
  return (
    <Fieldset label={label} name={name} {...props}>
      {options.map((opt) => (
        <InlineLabel label={typeof opt === "string" ? opt : opt.label}>
          <Input
            key={typeof opt === "string" ? opt : opt.value}
            type="checkbox"
            name={name}
            value={typeof opt === "string" ? opt : String(opt.value)}
            data-group={name}
            defaultChecked={
              defaultChecked
                ? defaultChecked.some(
                    typeof opt === "string"
                      ? (e) => e === opt
                      : (e) => e === opt.value
                  )
                : false
            }
          />
        </InlineLabel>
      ))}
    </Fieldset>
  );
}
