import * as React from "react";

export type FieldsetProps = React.PropsWithChildren<
  Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "name"> & {
    label: string;
    name: string;
    hint?: string | null;
    hintClassName?: undefined | string;
  }
>;

export function Fieldset({
  name,
  label,
  children,
  className,
  hint,
  hintClassName,
  ...props
}: FieldsetProps): React.ReactElement {
  const hintId = `${name}-hint`;
  // Input elements being described by hint should include "aria-describedby": `${name}-hint`
  return (
    <fieldset
      {...props}
      className={"df-Fieldset".concat(className ? " " : "", className || "")}
    >
      <legend>{label}</legend>
      {children}
      <span
        id={hintId}
        className={"df-Fieldset-hint".concat(
          hintClassName ? " " : "",
          hintClassName || ""
        )}
        aria-live="polite"
      >
        {hint}
      </span>
    </fieldset>
  );
}
