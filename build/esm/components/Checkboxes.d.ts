import * as React from "react";
import { FieldsetProps } from "./Fieldset";
import { Option } from "../core/types";
import { BaseInputProps } from "./Input";
export declare type CheckboxesType = {
    type: "checkboxes";
    options: Option[] | string[];
    label: string;
    defaultChecked?: string[];
};
export declare type CheckboxesProps = BaseInputProps & CheckboxesType & FieldsetProps;
export declare function Checkboxes({ type, name, options, label, defaultChecked, ...props }: CheckboxesProps): React.ReactElement;
