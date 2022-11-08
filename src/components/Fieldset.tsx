import * as React from "react";

export type FieldsetProps = React.PropsWithChildren<
  Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "name"> & {
    name: string;
    label: string;
    group?: boolean;
    hint?: string | null;
    hintClassName?: undefined | string;
    labelClassName?: undefined | string;
    hintStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
  }
>;

export function Fieldset({
  name,
  label,
  children,
  hint,
  hintClassName,
  labelClassName,
  group,
  labelStyle,
  hintStyle,
  ...props
}: FieldsetProps): React.ReactElement {
  const hintId = `${name}-hint`;
  // Input elements being described by hint should include "aria-describedby": `${name}-hint`
  return (
    <fieldset data-fgb="fieldset" {...props}>
      <span
        id={hintId}
        data-fgb="hint"
        className={hintClassName}
        aria-live="polite"
        data-fgb-hint={hint}
        style={{ order: 2, ...hintStyle }}
      >
        {hint}
      </span>
      {group ? (
        <legend data-fgb="label" className={labelClassName} style={labelStyle}>
          {label}
        </legend>
      ) : (
        <label
          htmlFor={name}
          data-fgb="label"
          className={labelClassName}
          style={labelStyle}
        >
          {label}
        </label>
      )}
      {children}
    </fieldset>
  );
}
