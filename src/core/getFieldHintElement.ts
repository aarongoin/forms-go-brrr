import { FieldInputElement } from "./types";

export function getFieldHintElement(
  el: FieldInputElement,
  errorOnly = true
): HTMLSpanElement | null {
  const hint = el
    .closest("[data-fgb='fieldset']")
    ?.querySelector(
      `#${(el as HTMLInputElement).name}-hint${
        errorOnly ? "[data-fgb='error']" : ""
      }`
    );
  return (hint as HTMLSpanElement) || null;
}
