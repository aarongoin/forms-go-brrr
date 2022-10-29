import * as React from "react";
export declare type SubmitProps = Omit<React.HTMLAttributes<HTMLButtonElement>, "type"> & {
    validate?: "onBlur" | "onChange";
};
export declare function Submit({ validate, ...props }: SubmitProps): React.ReactElement;
