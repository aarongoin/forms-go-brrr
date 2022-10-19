import * as React from "react";
export declare type LabelProps = React.PropsWithChildren<{
    label: React.ReactNode;
    name: string;
    hint?: string | null;
    className?: string | undefined;
    textClassName?: undefined | string;
    hintClassName?: undefined | string;
}>;
export declare function Label({ label, name, children, hint, className, textClassName, hintClassName, }: LabelProps): JSX.Element;
export declare function InlineLabel({ label, children, className, }: Omit<LabelProps, "name" | "hint">): React.ReactElement;
