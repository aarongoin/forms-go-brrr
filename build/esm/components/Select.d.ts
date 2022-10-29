import * as React from "react";
import { Option, Optional } from "../core/types";
import { BaseInputProps } from "./Input";
export declare type SelectType = {
    type: "select";
    options: Option[] | string[];
    defaultSelected?: string | string[];
    multiple?: boolean;
    size?: number;
    renderOption?: (opt: Option | string) => React.ReactNode;
    optionClassName?: string | undefined;
};
export declare type SelectFieldProps = BaseInputProps & SelectType & React.SelectHTMLAttributes<HTMLSelectElement>;
export declare type SelectProps = BaseInputProps & Optional<SelectType, "type"> & React.SelectHTMLAttributes<HTMLSelectElement>;
export declare function Select({ options, type, defaultSelected, name, renderOption, className, optionClassName, ...props }: SelectProps): React.ReactElement;
