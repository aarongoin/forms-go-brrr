import * as React from "react";
import { Option } from "../core/types";
import { FieldsetProps } from "./Fieldset";
import { BaseInputProps } from "./Input";
export declare type RadioGroupType = {
    type: "radiogroup";
    options: Option[] | string[];
    defaultChecked?: string;
};
export declare type RadioGroupProps = BaseInputProps & RadioGroupType & FieldsetProps;
export declare function RadioGroup({ type, name, options, label, defaultChecked, ...props }: RadioGroupProps): React.ReactElement;
