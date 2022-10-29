import * as React from "react";
import { CheckboxesProps } from "./Checkboxes";
import { InputProps } from "./Input";
import { RadioGroupProps } from "./RadioGroup";
import { SelectFieldProps } from "./Select";
import { TextareaFieldProps } from "./Textarea";
import { LabelProps } from "./Label";
import { ValidateFn } from "../core";
declare type FieldsetFieldProps = CheckboxesProps | RadioGroupProps;
declare type LabelledFieldProps = (SelectFieldProps | TextareaFieldProps | InputProps) & LabelProps;
export declare type FieldProps = (FieldsetFieldProps | LabelledFieldProps) & {
    validateOnChange?: ValidateFn;
    validateOnBlur?: ValidateFn;
    inputClassName?: undefined | string;
};
export declare function Field(props: FieldProps): React.ReactElement;
export {};
