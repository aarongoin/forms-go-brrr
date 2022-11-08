import * as React from "react";
import { Option } from "../core/types";
import { FieldsetProps } from "./Fieldset";
import { BaseInputProps } from "./Input";
export declare type GroupType = {
    type: "radios" | "checkboxes";
    options: Option[] | string[];
    defaultChecked?: string | string[];
};
export declare type GroupProps = BaseInputProps & GroupType & FieldsetProps & {
    inputClassName?: undefined | string;
    inputStyle?: React.CSSProperties;
};
export declare function Group({ type, name, options, label, defaultChecked, ...props }: GroupProps): React.ReactElement[];
