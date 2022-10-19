/// <reference types="react" />
export declare type FieldInputElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export declare type FieldElement = FieldInputElement | HTMLButtonElement;
export declare function isInputElement(el: HTMLElement): el is HTMLInputElement;
export declare function isSelectElement(el: HTMLElement): el is HTMLSelectElement;
export declare function isTextareaElement(el: HTMLElement): el is HTMLTextAreaElement;
export declare type FieldValues = string | boolean | (string | null)[] | FileList | null | undefined;
export declare type FormValues = Record<string, FieldValues>;
export declare type Option = {
    id: number | string;
    name: string;
};
export declare type ChangeEventT = React.ChangeEvent<FieldInputElement>;
export declare type BlurEventT = React.FocusEvent<FieldInputElement>;
export declare type GetValue<FV extends FormValues = FormValues> = <K extends keyof FV & string = keyof FV & string>(name: K) => FV[K];
export declare type SetValue<FV extends FormValues = FormValues> = <K extends keyof FV & string = keyof FV & string>(name: K, value: FV[K]) => void;
export declare type FormErrors<FV extends FormValues = FormValues> = Record<keyof FV, string>;
export declare type FormHandler<FV extends FormValues = FormValues> = (getValue: GetValue<FV>, setValue: SetValue<FV>) => FormErrors<FV> | undefined | null;
