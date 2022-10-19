import * as React from "react";
import { Option } from "../core/types";
import { BaseInputProps } from "./Input";
export declare type SelectType = {
    type: "select";
    options: Option[] | string[];
    defaultSelected?: string | string[];
    multiple?: boolean;
    size?: number;
    renderOption?: (opt: Option | string) => React.ReactNode;
    className?: string | undefined;
    optionClassName?: string | undefined;
};
export declare function Select({ options, type, defaultSelected, name, renderOption, className, optionClassName, ...props }: BaseInputProps & SelectType): React.ReactElement;
