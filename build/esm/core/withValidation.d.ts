import * as React from "react";
import { FieldInputElement, FieldValues, ValidationEvents, ValidateFn } from "./types";
export declare function withValidation<E extends ValidationEvents>(onEvent: E): <I extends FieldInputElement, V extends FieldValues = FieldValues, P extends Record<string, unknown> = Record<string, unknown>>(Cmp: React.ComponentType<P & { [K in E]: React.HTMLAttributes<I>[K]; }>, validators: ValidateFn<V> | ValidateFn<V>[]) => ({ validators: _validators, ...props }: P & { [K_1 in E]?: React.HTMLAttributes<I>[K_1] | undefined; } & {
    validators?: ValidateFn<V>[] | undefined;
}) => JSX.Element;
export declare const withValidationOnChange: <I extends FieldInputElement, V extends FieldValues = FieldValues, P extends Record<string, unknown> = Record<string, unknown>>(Cmp: React.ComponentType<P & {
    onChange: React.FormEventHandler<I> | undefined;
}>, validators: ValidateFn<V> | ValidateFn<V>[]) => ({ validators: _validators, ...props }: P & {
    onChange?: React.FormEventHandler<I> | undefined;
} & {
    validators?: ValidateFn<V>[] | undefined;
}) => JSX.Element;
export declare const withValidationOnBlur: <I extends FieldInputElement, V extends FieldValues = FieldValues, P extends Record<string, unknown> = Record<string, unknown>>(Cmp: React.ComponentType<P & {
    onBlur: React.FocusEventHandler<I> | undefined;
}>, validators: ValidateFn<V> | ValidateFn<V>[]) => ({ validators: _validators, ...props }: P & {
    onBlur?: React.FocusEventHandler<I> | undefined;
} & {
    validators?: ValidateFn<V>[] | undefined;
}) => JSX.Element;
