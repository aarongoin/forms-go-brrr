import * as React from "react";
import { Option } from "../core/types";
import { BaseInputProps } from "./Input";
export declare type CheckboxesType = {
    type: "checkboxes";
    options: Option[] | string[];
    label: string;
    defaultChecked?: string[];
};
export declare type CheckboxesProps = BaseInputProps & CheckboxesType & {
    className?: string | undefined;
};
export declare function Checkboxes({ type, name, options, label, defaultChecked, ...props }: CheckboxesProps): React.ReactElement;
