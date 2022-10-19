import * as React from "react";

export type LabelProps = React.PropsWithChildren<{
  label: React.ReactNode;
  name: string;
  hint?: string | null;
  className?: string | undefined;
  textClassName?: undefined | string;
  hintClassName?: undefined | string;
}>;

export function Label({
  label,
  name,
  children,
  hint,
  className,
  textClassName,
  hintClassName,
}: LabelProps) {
  const hintId = `${name}-hint`;
  // Input element that is being described by hint should include "aria-describedby": `${name}-hint`
  return (
    <label
      htmlFor={name}
      className={"df-Label".concat(className ? " " : "", className || "")}
    >
      {typeof label === "string" ? (
        <span
          className={"df-Label-text".concat(
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
        className={"df-Label-hint".concat(
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
    <label className={"df-Label".concat(className ? " " : "", className || "")}>
      {children}
      {label}
    </label>
  );
}
