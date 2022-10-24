import * as React from "react";
import { FieldInputElement, FieldValues, ValidationEvents, ValidateFn } from "./types";
export declare function wrapWithFieldValidation<I extends FieldInputElement, V extends FieldValues = FieldValues>(onEvent: ValidationEvents, validators: ValidateFn<V>[], outerHandler?: (event: React.ChangeEvent<I> | React.FocusEvent<I>) => unknown): {
    [x: string]: (event: React.ChangeEvent<I> | React.FocusEvent<I>) => unknown;
    onInvalid: (event: React.InvalidEvent<I>) => void;
};
