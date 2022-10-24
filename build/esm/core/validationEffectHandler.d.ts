import React from "react";
import { FormHandler, FormValues } from "./types";
export declare function validationEffectHandler<E extends React.ChangeEvent<HTMLElement> | React.FocusEvent<HTMLElement>, FV extends FormValues = FormValues>(validator: FormHandler<FV>, onEvent?: React.EventHandler<E>): React.EventHandler<E>;
