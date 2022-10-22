/// <reference types="react" />
import { BaseInputProps } from "./Input";
export declare type TextareaType = {
    type: "textarea";
    minRows?: number;
    maxRows?: number;
    minlength?: number;
    maxlength?: number;
    spellcheck?: boolean;
    autosize?: boolean;
    className?: string | undefined;
};
export declare function Textarea({ type, minRows, autosize, className, ...props }: BaseInputProps & TextareaType): JSX.Element;
