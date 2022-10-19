import * as React from "react";

export type FieldsetProps = React.PropsWithChildren<{
  label: string;
  name: string;
  disabled?: boolean;
  hint?: string | null;
  className?: string | undefined;
  hintClassName?: undefined | string;
}>;

export function Fieldset({
  name,
  label,
  disabled,
  children,
  className,
  hint,
  hintClassName,
}: FieldsetProps): React.ReactElement {
  const hintId = `${name}-hint`;
  // Input elements being described by hint should include "aria-describedby": `${name}-hint`
  return (
    <fieldset
      disabled={disabled}
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
