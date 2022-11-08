import * as React from "react";
import { InputProps } from "./Input";
import { GroupProps } from "./Group";
import { SelectFieldProps } from "./Select";
import { TextareaFieldProps } from "./Textarea";
import { FieldsetProps } from "./Fieldset";
import { ValidateFn } from "../core";
export declare type FieldProps = FieldsetProps & (SelectFieldProps | TextareaFieldProps | InputProps | GroupProps) & {
    validateOnChange?: ValidateFn | boolean;
    validateOnBlur?: ValidateFn | boolean;
    inputClassName?: undefined | string;
    inputStyle?: React.CSSProperties;
    inputLabelClassName?: undefined | string;
    inputLabelStyle?: React.CSSProperties;
};
export declare function Field(props: FieldProps): React.ReactElement;
