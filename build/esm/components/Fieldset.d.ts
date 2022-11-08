import * as React from "react";
export declare type FieldsetProps = React.PropsWithChildren<Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "name"> & {
    name: string;
    label: string;
    group?: boolean;
    hint?: string | null;
    hintClassName?: undefined | string;
    labelClassName?: undefined | string;
    hintStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
}>;
export declare function Fieldset({ name, label, children, hint, hintClassName, labelClassName, group, labelStyle, hintStyle, ...props }: FieldsetProps): React.ReactElement;
