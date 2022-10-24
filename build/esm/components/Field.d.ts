import * as React from "react";
import { CheckboxesProps } from "./Checkboxes";
import { InputProps } from "./Input";
import { RadioGroupProps } from "./RadioGroup";
import { SelectProps } from "./Select";
import { TextareaProps } from "./Textarea";
import { LabelProps } from "./Label";
import { ValidateFn } from "../core";
declare type FieldsetFieldProps = CheckboxesProps | RadioGroupProps;
declare type LabelledFieldProps = (SelectProps | TextareaProps | InputProps) & LabelProps;
export declare type FieldProps = (FieldsetFieldProps | LabelledFieldProps) & {
    validate?: "onChange" | "onBlur";
    validator?: ValidateFn;
    validators?: ValidateFn[];
    inputClassName?: undefined | string;
};
export declare function Field(props: FieldProps): React.ReactElement;
export {};
