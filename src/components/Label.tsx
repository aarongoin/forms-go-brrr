import * as React from "react";

export type LabelProps = React.PropsWithChildren<
  Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "htmlFor" | "name"> & {
    label: React.ReactNode;
    name: string;
    hint?: string | null;
    textClassName?: undefined | string;
    hintClassName?: undefined | string;
  }
>;

export function Label({
  label,
  name,
  children,
  hint,
  textClassName,
  hintClassName,
  className,
  ...props
}: LabelProps) {
  const hintId = `${name}-hint`;
  // Input element that is being described by hint should include "aria-describedby": `${name}-hint`
  return (
    <label
      htmlFor={name}
      {...props}
      className={"brrr-Label".concat(className ? " " : "", className || "")}
    >
      {typeof label === "string" ? (
        <span
          className={"brrr-Label-text".concat(
            textClassName ? " " : "",
            textClassName || ""
          )}
        >
          {label}
        </span>
      ) : (
        label
      )}
      {children}
      <span
        id={hintId}
        className={"brrr-Label-hint".concat(
          hintClassName ? " " : "",
          hintClassName || ""
        )}
        aria-live="polite"
      >
        {hint}
      </span>
    </label>
  );
}

export function InlineLabel({
  label,
  children,
  className,
}: Omit<LabelProps, "name" | "hint">): React.ReactElement {
  return (
    <label className={"brrr-InlineLabel".concat(className ? " " : "", className || "")}>
      {children}
      {label}
    </label>
  );
}
