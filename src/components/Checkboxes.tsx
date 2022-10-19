import * as React from "react";
import { Fieldset } from "./Fieldset";
import { Option } from "../core/types";
import { Input, BaseInputProps } from "./Input";
import { InlineLabel } from "./Label";

export type CheckboxesType = {
  type: "checkboxes";
  options: Option[] | string[];
  label: string;
  defaultChecked?: string[];
};

export type CheckboxesProps = BaseInputProps &
  CheckboxesType & {
    className?: string | undefined;
  };

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
        <InlineLabel label={typeof opt === "string" ? opt : opt.name}>
          <Input
            key={typeof opt === "string" ? opt : opt.id}
            type="checkbox"
            name={name}
            value={typeof opt === "string" ? opt : String(opt.id)}
            data-group={name}
            defaultChecked={
              defaultChecked
                ? defaultChecked.some(
                    typeof opt === "string"
                      ? (e) => e === opt
                      : (e) => e === opt.id
                  )
                : false
            }
          />
        </InlineLabel>
      ))}
    </Fieldset>
  );
}
