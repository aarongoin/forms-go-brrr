import * as React from "react";
import { FormErrors, FormHandler, FormValues } from "../core/types";
export declare type FormProps<FV extends FormValues = FormValues> = {
    dialog?: boolean;
    method?: "post" | "get";
    action?: string;
    onChange?: FormHandler<FV>;
    onBlur?: FormHandler<FV>;
    className?: string | undefined;
} & ({
    submitFormData: (data: FormData) => Promise<void | FormErrors<FV>>;
    submitJson?: void;
} | {
    submitFormData?: void;
    submitJson: (data: Record<string, unknown>) => Promise<void | FormErrors<FV>>;
});
export declare function Form({ dialog, method, action, submitFormData, submitJson, onChange, onBlur, className, ...props }: FormProps): React.ReactElement;
