import * as React from "react";
import { FormErrors, FormHandler, FormValues } from "../core/types";
export declare type FormProps<FV extends FormValues = FormValues> = React.PropsWithChildren<Omit<React.FormHTMLAttributes<HTMLFormElement>, "method" | "noValidate" | "autoComplete" | "target" | "encType"> & {
    dialog?: boolean;
    method?: "post" | "get";
    action?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
    encType?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
    autoComplete?: boolean;
    validate?: "onChange" | "onBlur" | "onSubmit" | "onChangeOrSubmit" | "onBlurOrSubmit";
    validator?: FormHandler<FV>;
} & ({
    submitFormData: (data: FormData) => void | FormErrors<FV> | Promise<void | FormErrors<FV>>;
    submitJson?: void;
} | {
    submitFormData?: void;
    submitJson: (data: Record<string, unknown>) => void | FormErrors<FV> | Promise<void | FormErrors<FV>>;
})>;
export declare function Form<FV extends FormValues = FormValues>({ dialog, method, action, submitFormData, submitJson, validate, validator, className, autoComplete, ...props }: FormProps<FV>): React.ReactElement;
