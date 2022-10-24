import * as React from "react";
export declare type FieldsetProps = React.PropsWithChildren<Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "name"> & {
    label: string;
    name: string;
    hint?: string | null;
    hintClassName?: undefined | string;
}>;
export declare function Fieldset({ name, label, children, className, hint, hintClassName, ...props }: FieldsetProps): React.ReactElement;
