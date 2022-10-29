import * as React from "react";
import { FieldInputElement, FieldValue, ValidationEvents, ValidateFn } from "./types";
export declare function wrapWithFieldValidation<I extends FieldInputElement, V extends FieldValue = FieldValue>(onEvent: ValidationEvents, validator: ValidateFn<V>, outerHandler?: (event: React.ChangeEvent<I> | React.FocusEvent<I>) => unknown): {
    [x: string]: (event: React.ChangeEvent<I> | React.FocusEvent<I>) => unknown;
    onInvalid: (event: React.InvalidEvent<I>) => void;
};
