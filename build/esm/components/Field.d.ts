import * as React from "react";
import { CheckboxesType } from "./Checkboxes";
import { BaseInputProps, InputTypes } from "./Input";
import { RadioGroupType } from "./RadioGroup";
import { SelectType } from "./Select";
import { TextareaType } from "./Textarea";
import { LabelProps } from "./Label";
import { ValidateFn } from "../core";
export declare type FieldProps = LabelProps & BaseInputProps & (InputTypes | SelectType | TextareaType | CheckboxesType | RadioGroupType) & {
    validate?: "onChange" | "onBlur";
    validators?: ValidateFn[];
    inputClassName?: undefined | string;
};
export declare function Field(props: FieldProps): React.ReactElement;
