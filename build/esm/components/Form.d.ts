import * as React from "react";
import { FormErrors, FormHandler, FormValues } from "../core/types";
export declare type FormProps<FV extends FormValues = FormValues> = React.PropsWithChildren<{
    dialog?: boolean;
    method?: "post" | "get";
    action?: string;
    className?: string | undefined;
    validate?: "onChange" | "onBlur" | "onSubmit" | "onChangeOrSubmit" | "onBlurOrSubmit";
    validator: FormHandler<FV>;
} & ({
    submitFormData: (data: FormData) => void | FormErrors<FV> | Promise<void | FormErrors<FV>>;
    submitJson?: void;
} | {
    submitFormData?: void;
    submitJson: (data: Record<string, unknown>) => void | FormErrors<FV> | Promise<void | FormErrors<FV>>;
})>;
export declare function Form({ dialog, method, action, submitFormData, submitJson, validate, validator, className, ...props }: FormProps): React.ReactElement;
