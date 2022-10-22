import { FormHandler, FormValues } from "./types";
export declare function validateForm<FV extends FormValues = FormValues>(form: HTMLFormElement, validator?: FormHandler<FV>): boolean;
