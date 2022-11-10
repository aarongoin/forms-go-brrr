import * as React from "react";
import { getFormIsValid } from "../core/getFormIsValid";

export type SubmitProps = Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  "type"
> & {
  validate?: "onBlur" | "onChange";
};

export function Submit({ validate, ...props }: SubmitProps): React.ReactElement {
  return (
    <button
      {...props}
      type="submit"
      ref={(el) => {
        if (el && el.form) {
          el.disabled = !getFormIsValid(el.form);
          el.form.addEventListener(
            // it's unintuitive but that's how it seems to work???
            validate === "onChange" ? "input" : "change",
            (event) => {
              el.disabled = !getFormIsValid(el.form!);
            }
          );
        }
      }}
    />
  );
}
