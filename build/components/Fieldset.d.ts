import * as React from "react";
export declare type FieldsetProps = React.PropsWithChildren<{
    label: string;
    name: string;
    disabled?: boolean;
    hint?: string | null;
    className?: string | undefined;
    hintClassName?: undefined | string;
}>;
export declare function Fieldset({ name, label, disabled, children, className, hint, hintClassName, }: FieldsetProps): React.ReactElement;
