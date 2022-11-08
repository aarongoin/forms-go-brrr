import * as React from "react";
import { Optional } from "../core/types";
import { BaseInputProps } from "./Input";
export declare type TextareaType = {
    type: "textarea";
    minRows?: number;
    maxRows?: number;
    spellcheck?: boolean;
    autosize?: boolean;
};
export declare type TextareaFieldProps = BaseInputProps & TextareaType & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare type TextareaProps = BaseInputProps & Optional<TextareaType, "type"> & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare function Textarea({ type, minRows, autosize, ...props }: TextareaProps): JSX.Element;
