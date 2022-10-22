import { FormValues } from "./types";
export declare const getFormValuesAsFormData: (form: HTMLFormElement) => FormData;
export declare const getFormValuesAsJson: <FV extends FormValues = FormValues>(form: HTMLFormElement) => FV;
