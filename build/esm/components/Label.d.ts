import * as React from "react";
export declare type LabelProps = React.PropsWithChildren<Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "htmlFor" | "name"> & {
    label: React.ReactNode;
    name: string;
    hint?: string | null;
    textClassName?: undefined | string;
    hintClassName?: undefined | string;
}>;
export declare function Label({ label, name, children, hint, textClassName, hintClassName, className, ...props }: LabelProps): JSX.Element;
export declare function InlineLabel({ label, children, className, }: Omit<LabelProps, "name" | "hint">): React.ReactElement;
