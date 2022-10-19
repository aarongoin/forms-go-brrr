import { FieldInputElement } from "./types";
declare let errorMessages: {
    badinput: string;
    required: string;
    minlength: string;
    maxlength: string;
    pattern: string;
    min: string;
    max: string;
    step: string;
    email: string;
    url: string;
};
export declare function setErrorMessages<K extends keyof typeof errorMessages>(errs: Pick<typeof errorMessages, K>): void;
export declare function getErrorMessage(input: FieldInputElement): string;
export {};
