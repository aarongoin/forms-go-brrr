import * as React from "react";
import { BaseInputProps } from "./Input";
export declare type TextareaType = {
    type: "textarea";
    minRows?: number;
    maxRows?: number;
    spellcheck?: boolean;
    autosize?: boolean;
};
export declare type TextareaProps = BaseInputProps & TextareaType & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare function Textarea({ type, minRows, autosize, className, ...props }: TextareaProps): JSX.Element;
